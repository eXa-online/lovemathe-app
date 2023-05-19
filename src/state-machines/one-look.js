import { createMachine } from 'xstate';

const evalAnswer = function(context, event){
  const givenSolution = event.answer
  const isCorrect = givenSolution === context.solutions[context.puzzleIndex]
  if (isCorrect) {
    return context.badgeIndex = context.badgeIndex + 1;
  } else {
    return context.badgeIndex;
  }
}

const incrementPuzzleIndex = (context) => { context.puzzleIndex = context.puzzleIndex + 1 }

const setClickTime = (context) => { context.clickTime = Date.now() }

const preventDoubleClick = function(context) {
  return Date.now() > (context.clickTime + context.cooldownTimeMiliseconds);
}

// Guard to check if all puzzles are completed
function completed(context) {
  return context.puzzleIndex === context.solutions.length;
}

export const oneLookMachine = (solutions, clickTime, showDuration) => {
  return createMachine({
      predictableActionArguments: false,
      id: 'game',
      context: {
        solutions,
        clickTime,
        showDuration,
        badgeIndex: 0,
        puzzleIndex: 0,
        cooldownTimeMiliseconds: 1000,
        initialCooldownTimeMiliseconds: 6000
      },
      initial: 'startPuzzle',
      states: {
        startPuzzle: {
          after: {
            INITIAL_COOLDOWN: { target: 'showPuzzle' }
          }
        },
        showPuzzle: {
          after: {
            SHOW_COOLDOWN: { target: 'hidePuzzle' }
          },
          always: {
            target: 'showResult',
            cond: 'completed',
          },

        },
        hidePuzzle: {
          exit: [evalAnswer, incrementPuzzleIndex, setClickTime],
          on: {
            PLAY: {
              target: 'showPuzzle',
              cond: 'preventDoubleClick'
            }
          }
        },
        showResult: {
          type: 'final'
        },
      }
    },
    {
      actions: { incrementPuzzleIndex, evalAnswer, setClickTime },
      guards: {
        completed,
        preventDoubleClick,
      },
      delays: {
        INITIAL_COOLDOWN: (context) => {
          return context.initialCooldownTimeMiliseconds;
        },
        SHOW_COOLDOWN: (context) => {
          return context.showDuration;
        }
      }
    }
  )};

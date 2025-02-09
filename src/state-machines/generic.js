import { createMachine } from 'xstate';

const evalAnswer = function(context, event){
  const givenSolution = event.answer
  const isCorrect = givenSolution === context.solutions[context.puzzleIndex]
  if (isCorrect && event.type == "PLAY") {
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

function completed(context) {
  return context.puzzleIndex === context.solutions.length;
}

export const genericMachine = (solutions, clickTime) => {
  return createMachine({
      predictableActionArguments: true,
      id: 'game',
      context: {
        solutions,
        clickTime,
        badgeIndex: 0,
        puzzleIndex: 0,
        cooldownTimeMiliseconds: 1000
      },
      initial: 'showPuzzle',
      states: {
        showPuzzle: {
          exit: [evalAnswer, incrementPuzzleIndex, setClickTime],
          always: {
            target: 'showResult',
            cond: 'completed',
          },
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
        preventDoubleClick
      }
    }
  )};

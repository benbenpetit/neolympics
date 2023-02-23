import { useContext, createContext, Context } from 'react'
import { IGame } from '@/core/types/IGame'

export type GameContextType = {
  gameState: IGame
  setGameState: (game: IGame) => void
}

export const GameContext = createContext<GameContextType>({
  gameState: {
    difficulty: 0,
    score: 0,
  },
  setGameState: () => {},
})

export const useGameContext = (GameContext: Context<GameContextType>) => {
  return useContext(GameContext)
}

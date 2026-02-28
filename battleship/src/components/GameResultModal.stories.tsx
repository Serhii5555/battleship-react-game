import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import GameResultModal from "./GameResultModal";
import type { GameResult } from "../store/gameStore";

const meta = {
  title: "Components/GameResultModal",
  component: GameResultModal,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complex modal component that displays game results with statistics. Features animated transitions, dynamic styling based on win/loss, multi-button actions, and localStorage integration for stats tracking.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    result: {
      description: "Game result data object",
      control: "object",
    },
    isOpen: {
      control: "boolean",
      description: "Control modal visibility",
      defaultValue: true,
    },
    onClose: {
      description: "Callback when modal closes",
      action: "closed",
    },
    onRetry: {
      description: "Callback when retry button is clicked",
      action: "retry",
    },
    onMainMenu: {
      description: "Callback when main menu button is clicked",
      action: "mainMenu",
    },
  },
} satisfies Meta<typeof GameResultModal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Victory result - shows successful game completion
 * Green overlay indicates win with positive statistics
 */
export const Victory: Story = {
  args: {
    isOpen: true,
    result: {
      shots: 12,
      hits: 5,
      shipCount: 5,
      won: true,
      message: "🎉 You Won! 🎉",
      timeElapsed: 125,
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
};

/**
 * Fast victory - quick win with minimum shots
 * Demonstrates excellent player performance
 */
export const FastVictory: Story = {
  args: {
    isOpen: true,
    result: {
      shots: 8,
      hits: 5,
      shipCount: 5,
      won: true,
      message: "⚡ Lightning Fast Victory! ⚡",
      timeElapsed: 45,
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
};

/**
 * Defeat result - shows game loss
 * Red overlay indicates loss with corrective actions
 */
export const Defeat: Story = {
  args: {
    isOpen: true,
    result: {
      shots: 35,
      hits: 3,
      shipCount: 5,
      won: false,
      message: "💔 Game Over",
      timeElapsed: 240,
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
};

/**
 * Narrow defeat - close game that player lost
 * Player found 4 out of 5 ships
 */
export const NarrowDefeat: Story = {
  args: {
    isOpen: true,
    result: {
      shots: 28,
      hits: 4,
      shipCount: 5,
      won: false,
      message: "So Close! 😟",
      timeElapsed: 180,
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
};

/**
 * Victory without time tracking
 * Demonstrates when timeElapsed is not available
 */
export const VictoryNoTimer: Story = {
  args: {
    isOpen: true,
    result: {
      shots: 15,
      hits: 5,
      shipCount: 5,
      won: true,
      message: "Victory!",
      // timeElapsed is undefined
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
};

/**
 * Closed/hidden state
 * Modal is not displayed when isOpen is false
 */
export const Closed: Story = {
  args: {
    isOpen: false,
    result: {
      shots: 12,
      hits: 5,
      shipCount: 5,
      won: true,
      message: "You Won!",
      timeElapsed: 125,
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
};

/**
 * Interactive modal with state management
 * Demonstrates full functionality with button interactions
 */
export const Interactive: Story = {
  args: {
    result: {
      shots: 14,
      hits: 5,
      shipCount: 5,
      won: true,
      message: "🎉 Excellent Victory! 🎉",
      timeElapsed: 142,
      timestamp: Date.now(),
    },
    onClose: () => console.log("Modal closed"),
    onRetry: () => console.log("Retrying game"),
    onMainMenu: () => console.log("Going to main menu"),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <GameResultModal
          {...args}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            args.onClose();
          }}
          onRetry={() => {
            setIsOpen(false);
            args.onRetry();
          }}
          onMainMenu={() => {
            setIsOpen(false);
            args.onMainMenu();
          }}
        />
        {!isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-40">
            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-[#920081] text-white rounded-lg hover:bg-[#720065] transition-colors"
            >
              Show Modal
            </button>
          </div>
        )}
      </>
    );
  },
};

import { Meta, StoryObj } from '@storybook/react';
import Thread, { ThreadProps } from '../components/thread';

// Meta is used to define the metadata for the Thread component story.
const meta: Meta<typeof Thread> = {
  title: 'Components/Thread', // Path in the Storybook sidebar
  component: Thread, // The component being documented
};

export default meta;

// StoryObj is a type for defining stories with specific arguments.
type Story = StoryObj<ThreadProps>;

// Default is a story that uses the Template with default arguments.
export const Default: Story = {
  args: {
    displayOptions: {
      themeId: 'nova',
      colorScheme: 'auto',
    },
    composerOptions: {
      autoFocus: true,
      disableSubmitButton: false,
      placeholder: 'Tell me about your Berlin rental problems...',
      submitShortcut: 'CommandEnter',
    },
    conversationOptions: {
      layout: 'list',
      autoScroll: true,
      showWelcomeMessage: true,
      conversationStarters: [
        { prompt: 'Write a poem using markdown and emojis' },
        { prompt: 'What is your name?' },
        { prompt: 'What is your favorite color?' },
      ],
    },
    messageOptions: {
      markdownLinkTarget: 'blank',
      showCodeBlockCopyButton: true,
      skipStreamingAnimation: false,
      streamingAnimationSpeed: 100,
      waitTimeBeforeStreamCompletion: 5000,
    },
  },
};
import { ChatMessageInput } from "./ChatMessageInput";

type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
};

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput
          disabled={disabled}
          onSend={onSendMessage}
        ></ChatMessageInput>
        <div className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          delectus repellendus quam impedit
        </div>
      </div>
    </footer>
  );
};

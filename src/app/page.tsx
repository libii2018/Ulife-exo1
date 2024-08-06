"use client";

import { useEffect, useState } from "react";
import PromptForm from "./_components/PromptForm";
import Promptscreen from "./_components/PromptScreen";
import "./globals.css";
import { postData } from "./model";
import { Sidebar } from "./_components/Sidebar";
import { Header } from "./_components/Header";
import { ChatArea } from "./_components/ChatArea";
import { title } from "process";
import { Chat } from "./types/Chat";
import { Footer } from "./_components/Footer";
import { v4 as uuidv4 } from "uuid";
import { tree } from "next/dist/build/templates/app-page";
import { SidebarChatButton } from "./_components/sidebarChatButton";

export default function Home() {
  const [prompt, setPrompt] = useState<Promise<string>>();
  const [sidebarOpened, setSiderbarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>("");
  const [chatActive, setChatActive] = useState<Chat>();
  const [AILoading, setAILoading] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    const result: Promise<string> = postData([], "/api/getResponse");
    setPrompt(result);
  }, []);

  useEffect(() => {
    if (AILoading) getAIResponse();
  }, [AILoading]);

  const openSidebar = () => setSiderbarOpened(true);
  const closeSidebar = () => setSiderbarOpened(false);

  const getAIResponse = async () => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);
    if (chatIndex > -1) {
      const response = await postData(
        chatListClone[chatIndex].messages,
        "/api/getResponse"
      );
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: "ai",
        body: response,
      });
    }
    setChatList(chatListClone);
    setAILoading(false);
  };

  const handleClearConversations = () => {
    if (AILoading) return;
    setChatActiveId("");
    setChatList([]);
  };
  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      // Creating new chat

      let newChatId = uuidv4();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidv4(), author: "me", body: message }],
        },
        ...chatList,
      ]);
      setChatActiveId(newChatId);
    } else {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      );
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: "me",
        body: message,
      });
      setChatList(chatListClone);
    }
    setAILoading(true);
  };

  const handleNewChat = () => {
    if (AILoading) return;
    setChatActiveId("");
    closeSidebar();
  };

  const handleSelectChat = (id: string) => {
    if (AILoading) return;

    let item = chatList.find((item) => item.id === id);
    if (item) setChatActiveId(item.id);
    closeSidebar();
  };

  const handleDeleteChat = (id: string) => {
    let chatListClone = [...chatList];
    let chatIndex = chatListClone.findIndex((item) => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId("");
  };

  const HandleEditChat = (id: string, newTitle: string) => {
    if (newTitle) {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex((item) => item.id === id);
      chatListClone[chatIndex].title = newTitle;
      setChatList(chatListClone);
    }
  };

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        {chatList.map((item) => (
          <SidebarChatButton
            key={item.id}
            chatItem={item}
            active={item.id === chatActiveId}
            onClick={handleSelectChat}
            onDelete={handleDeleteChat}
            onEdit={HandleEditChat}
          />
        ))}
      </Sidebar>
      <section className="flex flex-col w-full">
        {/* <button onClick={() => setSiderbarOpened(true)}>Ouvrir Siderbar</button> */}
        <Header
          openSiderbarClick={openSidebar}
          title={chatActive ? chatActive.title : "New conversation"}
          newChatClick={handleNewChat}
        />
        <ChatArea chat={chatActive} loading={AILoading} />

        <Footer onSendMessage={handleSendMessage} disabled={AILoading} />
      </section>
    </main>
  );
}

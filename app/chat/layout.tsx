import React from "react";

const ChatLayout = ({
  list,
  chat,
  children,
}: Readonly<{
  list: React.ReactNode;
  chat: React.ReactNode;
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <aside>{list}</aside>
      <main>
        <>
          {chat}
          {children}
        </>
      </main>
    </div>
  );
};

export default ChatLayout;

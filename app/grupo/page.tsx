"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function GroupPage() {
  const initialMessages = [
    {
      user: "Roberto R",
      message: "Hola a todos, ¿cómo están?",
      isCurrentUser: false,
    },
    { user: "Fernando", message: "Bien y tú?", isCurrentUser: false },
    { user: "Tú", message: "¡Hola! Estoy bien, gracias.", isCurrentUser: true },
    {
      user: "Maria Fernanda",
      message: "¡Qué bueno escuchar eso!",
      isCurrentUser: false,
    },
    {
      user: "Tú",
      message: "¿Cómo va el proyecto del grupo?",
      isCurrentUser: true,
    },
    {
      user: "Juan Carlos",
      message: "Vamos bien, pero necesitamos más ideas.",
      isCurrentUser: false,
    },
    {
      user: "Tú",
      message: "Claro, tengo algunas ideas que puedo compartir.",
      isCurrentUser: true,
    },
    {
      user: "Javier",
      message: "Genial, ¿cuándo podemos reunirnos?",
      isCurrentUser: false,
    },
    {
      user: "Tú",
      message: "Podemos hacerlo el viernes por la tarde.",
      isCurrentUser: true,
    },
    {
      user: "Rodrigo T",
      message: "Me parece bien, ¿a qué hora?",
      isCurrentUser: false,
    },
  ];

  const users = [
    "Roberto R",
    "Juan Carlos",
    "Maria Fernanda",
    "Javier",
    "Rodrigo T",
    "Fernando",
    "Jorge",
    "Javier L",
    "Beatriz",
    "Fernando S",
  ];

  const [messages, setMessages] = useState(initialMessages);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    const newMessage = inputRef.current?.value.trim();
    if (newMessage) {
      setMessages((prev) => [
        ...prev,
        { user: "Tú", message: newMessage, isCurrentUser: true },
      ]);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Grupo #ads9f0878hkj</h1>
      {/* Chat dentro del Sheet */}
      <div className="mb-4">
        <Sheet>
          <SheetTrigger className="px-4 py-2 border rounded-md">
            Abrir Chat
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>Chat del grupo</SheetTitle>
              <SheetDescription>Conversación en tiempo real</SheetDescription>
            </SheetHeader>

            <div className="flex flex-col h-[90%] mt-4 border rounded-md p-2">
              <div className="overflow-y-auto flex-1 space-y-4 px-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.isCurrentUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-md max-w-[80%] ${
                        msg.isCurrentUser
                          ? "bg-green-200 text-right"
                          : "bg-blue-200 text-left"
                      }`}
                    >
                      <p className="text-sm text-black/80">{msg.user}</p>
                      <p className="text-md text-black">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input para escribir */}
              <div className="flex items-center gap-x-2 p-2 border-t mt-2">
                <Input
                  ref={inputRef}
                  placeholder="Escribe tu mensaje"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                />
                <div
                  className="p-2 bg-primary rounded-md cursor-pointer"
                  onClick={handleSend}
                >
                  <Send className="w-6 h-6 text-white dark:text-black" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Lista de usuarios visible siempre */}
      <div className="mb-4 p-4 border rounded-md w-[50%]">
        <h2 className="text-xl font-semibold mb-2">Usuarios</h2>
        <div className="gap-y-4 gap-x-4 flex flex-wrap">
          {users.map((user, idx) => (
            <span key={idx} className="px-2 py-1 bg-muted rounded-md">
              {user}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

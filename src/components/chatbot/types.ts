
export type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export type FAQ = Record<string, string>;

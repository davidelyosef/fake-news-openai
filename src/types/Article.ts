export type Article = {
  id: string;
  title: string;
  fakeTitle?: string | null;
  url: string;
  date: string;
  category: string;
  source: string | undefined;
}
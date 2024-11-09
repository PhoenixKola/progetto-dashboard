export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: number;
  }
  
  export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
  }

  export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
  
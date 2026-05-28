declare namespace NodeJS {
  interface ProcessEnv {
    BASE_URL: string;

    USER_EMAIL: string;
    USER_PASSWORD: string;

    INVALID_USER: string;
    INVALID_PASSWORD: string;
  }
}
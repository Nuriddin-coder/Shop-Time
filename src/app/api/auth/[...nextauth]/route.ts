import NextAuth from "next-auth";
import { authOption } from "@/config/auth-option";

const handleAuth = NextAuth(authOption);

export { handleAuth as GET, handleAuth as POST };
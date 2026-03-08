import  Jwt  from "jsonwebtoken";


const envSecret = process.env.JWT_SECRET;
if(!envSecret){
    throw new Error("JWT_SECRET is not defined in environment variables");
}

const JWT_SECRET = envSecret;

const JWT_EXPIRATION = "1d"

interface JwtPayloadWithUserId extends Jwt.JwtPayload{
    userId: number
}

export class TokenJwt {
    static generateToken(id_user: number): string{
        return Jwt.sign({id_user}, JWT_SECRET, {expiresIn: JWT_EXPIRATION});
    }

    static verifyToken(token: string): JwtPayloadWithUserId | null{
    try {
        const decoded = Jwt.verify(token, JWT_SECRET) as unknown as JwtPayloadWithUserId;

        if(typeof decoded === "object" && "id_user" in decoded){
            return decoded;
        }

        return null;

    } catch (error) {

        console.error("Error verifying token:", error);
        return null;
        
    }
    }

}



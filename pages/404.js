import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>ooops....</h1>
            <h2>This page is not found</h2>
            <p>go back to the <Link href="/">
                <a>Home Page</a>
            </Link></p>
        </div>
     );
}
 
export default NotFound;
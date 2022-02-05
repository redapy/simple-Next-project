import Link from "next/link";

const NotFound = () => {
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
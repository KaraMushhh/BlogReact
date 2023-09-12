import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <link to="/"> back to the homepage...</link>
        </div>
     );
}
 
export default NotFound;
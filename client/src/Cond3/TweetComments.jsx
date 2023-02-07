import React from "react";

//?without condition...
// const TweetComment = (props) => {
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }

//?null & gurd...
// const TweetComment = (props) => {
//     if(props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }

//?if-else...
// const TweetComment = (props) => {
//     if(props.comments.length === 0) {
//         return (
//             <div className="tweet-comments">
//             <div className="tweet-count">
//                 {Error} 
//                 <br/>
//                 No comments...{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//         );
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//             </div>
//             <TweetList comments={props.comments} />
//         </div>
//     )
// }

//?Ternary Operator...
// const TweetComment = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={()=> setShow(!Show)}>{Show? "Hide" : "Show"}</button>
//             </div>
//             {
//                 Show?  <TweetList comments={props.comments} /> : null
//             }
//         </div>
//     );
// }

//?Short Circuit...
// const TweetComment = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={()=> setShow(!Show)}>{Show? "Hide" : "Show"}</button>
//             </div>
//             {
//                 Show && <TweetList comments={props.comments} />
//             }
//         </div>
//     );
// }

//?IIFE...
// const TweetComment = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if (props.comments.length === 0) {
//         return null;
//     }
//     return (
//         <div className="tweet-comments">
//             <div className="tweet-count">
//                 There are {props.comments.length} comments{" "}
//                 <button onClick={()=> setShow(!Show)}>{Show? "Hide" : "Show"}</button>
//             </div>
//             {
//                 (() => {
//                     if(!Show) return null;
//                     return (<TweetList comments={props.comments} />);
//                 })()
//             }
//         </div>
//     );
// }

//?Custom conditional component...
// const IF = ({Condition, Children}) => {
//     if(Condition) return Children;
//     return null;
// }
// const TweetComment = (props) => {
//     const [Show, setShow] = React.useState(false);
//     if(props.comments.length === 0) {
//         return null;
//     } else {
//         return (
//             <div className="tweet-comments">
//                 <div className="tweet-count">
//                     There are {props.comments.length} comments{" "}
//                     <button onClick={()=> setShow(!Show)}>{Show? "Hide" : "Show"}</button>
//                 </div>
//                 {
//                     <IF Condition={Show} Children={<TweetList comments={props.comments} />}/>
//                 }
//             </div>
//         );
//     }
// }

//? HOC(Higher Order Component)...
const CondComp = ({Condition, children}) => {
    if(Condition) return children;
    return null;
}
const AuthGurd = (Component) => {
    if(localStorage.getItem('user')) {
        return (props) => <Component {...props} />;
    }
    return () => <span className="error">Please Authenticate Yourself...</span>
}
const TweetComment = AuthGurd((props) => {
    const [Show, setShow] = React.useState(false);
    if(props.comments.length === 0) {
        return null;
    } else {
        return (
            <div className="tweet-comments">
                <div className="tweet-count">
                    There are {props.comments.length} comments{" "}
                    <button onClick={()=> setShow(!Show)}>{Show? "Hide" : "Show"}</button>
                </div>
                {
                    <CondComp Condition={Show}><TweetList comments={props.comments} /></CondComp>
                }
            </div>
        );
    }
});

//Using JSX...
// let Error = <span className="error">There was an error... fix these.</span>

const TweetList = ({ comments }) => (
    <ul>
        {comments.map((comment) => {
            return (
                <li key={comment.user} className="tweet-comment">
                    <span className="tweet-comment__name">{comment.name}</span>
                    <span className="tweet-comment__name">{comment.user}</span>
                    <p>{comment.text}</p>
                </li>
            )

        })}
    </ul>
)

export default TweetComment
function TextArea({setText,text}){


    return(
        <div>
            <textarea value={text} onChange={setText}/>
        </div>
    )
}

export default TextArea;
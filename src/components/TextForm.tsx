import {useRef, useState} from 'react'

export default function TextForm(props: any) {
    const [text, setText] = useState("");
    const textRef: any = useRef(null);
    
    const handleUpBtnClick= () => {
        let textUpperCase = text.toUpperCase();
        setText(textUpperCase);
    }

    const handleLowBtnClick = () => {
        let textLowerCase = text.toLowerCase();
        setText(textLowerCase);
    }

    // function to change given text to sentence case by changing first alphabet of first word of every sentence to uppercase and adding space before first word of every sentence.
    const handleSentenceBtnClick = () => {
        const crrText = text.trim();
        let arraySentence = crrText.split(/[.]+/);

        if(arraySentence[arraySentence.length-1] === "") arraySentence.pop();
        for(let chartrIndex in arraySentence) {
            let charValue = arraySentence[chartrIndex].split("");
            let beginningSpaceCount = 0;
            for(let element of charValue) {
                if(element !== " " && element !== '\n') break;
                beginningSpaceCount++;
            }
            if(beginningSpaceCount < charValue.length){ 
                if(beginningSpaceCount === 0 && chartrIndex.toString() !== "0") {
                    charValue.unshift(" ");
                    beginningSpaceCount++;
                }
                charValue[beginningSpaceCount] = charValue[beginningSpaceCount].toUpperCase();
            }
            arraySentence[chartrIndex] = charValue.join("");
        }

        let newArrSentence = arraySentence.join(".");
        if(text.split("")[text.length-1] === ".") newArrSentence += ".";
        setText(newArrSentence);
    }

    const handleRemoveExtraSpaces= () => {
        const crrText = text.trim();
        const textNew = crrText.split(/[ ]+/).join(" ");
        setText(textNew);
    }

    const handleCopy= () => {
        textRef?.current?.select()
        navigator.clipboard.writeText(text);
    }

    const handleClearBtnClick = () => {
        let textCleared="";
        setText(textCleared);
    }

    // function to return text length as 0 if textarea is empty. This also emits the error of extra space or full stops being counted as words.
    const getWordsLength = () => {
        let textToAnalyze = text;
        let wordsArray=textToAnalyze.split(/[\s.,]+/);
        let wordCount=wordsArray.length;   
        if(wordsArray[0] === "") {
            if(wordCount === 1 || wordsArray[1] === "") {
                wordCount = 0;
                return wordCount;
            } else wordCount--;
        }
        if (wordsArray[wordsArray.length-1] === "") {
            wordCount--
        }
        return wordCount;
    }

    const getWordsReadingTime = () => {
        let textToAnalyze = text;
        let wordsArray=textToAnalyze.split(/[\s.,]+/);
        let wordCount=wordsArray.length;   
        if(wordsArray[0] === "") {
            if(wordCount === 1 || wordsArray[1] === "") {
                wordCount = 0;
                return wordCount;
            } else wordCount--;
        }
        if (wordsArray[wordsArray.length-1] === "") {
            wordCount--
        }
        const result = (0.008 * wordCount).toFixed(2);
        return result;
    }
    
  return (
    <div className='w-full text-center content-center dark:bg-gray-900 dark:text-white'>
        <div className='w-5xl max-sm:w-fit mx-auto container text-center'>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mt-9 mb-3">
                <textarea id="myBox" rows={10} value={text} ref={textRef} onChange={(event: any) => setText(event.target.value)} 
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                focus:ring-blue-500 focus:outline-blue-400 dark:bg-gray-700 dark:outline-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:outline-gray-500" 
                placeholder="Write your thoughts here..."></textarea>
            </div>
            <div className='w-full mx-auto flex justify-center flex-row max-sm:flex-col max-sm:w-fit max-sm:px-15'>
                <button disabled={text.length === 0} type='button' className='mx-2 my-1 btn-swap rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 border-1 border-blue-600 text-white px-2 py-1' onClick={handleUpBtnClick}>Convert to UPPERCASE</button>
                <button disabled={text.length === 0} className='mx-2 my-1 btn-swap rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 border-1 border-blue-600 text-white px-2 py-1' onClick={handleLowBtnClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className='mx-2 my-1 btn-swap rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 border-1 border-blue-600 text-white px-2 py-1' onClick={handleSentenceBtnClick}>Convert to Sentence case</button>
                <button disabled={text.length === 0} className='mx-2 my-1 btn-swap rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 border-1 border-blue-600 text-white px-2 py-1' onClick={handleRemoveExtraSpaces}>Remove Extra spaces</button>
                <button disabled={text.length === 0} className='mx-2 my-1 btn-swap rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 border-1 border-blue-600 text-white px-2 py-1' onClick={handleCopy}>Copy text</button>
                <button disabled={text.length === 0} className='mx-2 my-1 btn-swap rounded-md bg-blue-600 hover:bg-blue-800 hover:border-blue-800 border-1 border-blue-600 text-white px-2 py-1' onClick={handleClearBtnClick}>Clear text</button>
            </div>
        </div>

        <div className="container">
            <h1 className='mt-6 mb-2 text-xl'>Text Summary</h1>
            <p><b>{getWordsLength()} words</b> and <b>{text.length} characters</b></p>
            <p>Approx <b>{getWordsReadingTime()} minutes</b> to read</p>
        </div>
    </div>
  )
}

TextForm.defaultProps = {
    heading: "Heading",
}
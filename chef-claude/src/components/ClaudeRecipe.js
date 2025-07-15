import React from "react";
import ReactMarkdown from 'react-markdown'

export default function ClaudeRepice(props) {

    return (
        <section aria-live="polite">
            
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
)

}
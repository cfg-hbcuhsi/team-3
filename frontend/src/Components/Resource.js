import React, { Component } from "react";
import "./Resource.css";

function Resource(parameter) {
    const {params} = parameter;
    const {title,summary,url} = params;
    
    return(
    <div>
        <li>
            {title}
        </li>
        <li>
            {summary}
        </li>
        <li>
            {url}
        </li>
    </div>)

}
export default Resource;
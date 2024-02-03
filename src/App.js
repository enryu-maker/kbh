import { Routes } from "react-router-dom"
import React from "react";
import Index from "./Navigation/Index"
import ReactGA from 'react-ga';
ReactGA.initialize('UA-192891018-1');
export default function App() {
  
  return (
    <div
      id="google_translate_element"
    >
      <Index
      />
    </div>

  )
}
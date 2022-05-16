import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
// import ReactDOM from 'react-dom'

// JSX(React) - элемент - обычный тег из HTML
// JSX(React)-компонент - функция которая возвращает JSX-разметку

// Создать searchInput внутри которого у вас будет div с label, input
// formAdd - в котором должна кнопка и поле ввода
// Эти два элемента отобразить на странице


const root = document.querySelector('#root');
createRoot(root).render(<App />)
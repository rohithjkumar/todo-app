import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [todo, changeTodo] = useState(
        [
            
        ]
    )
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (response)=>{
                changeTodo(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            {todo.map(
                                (value, index) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.userId}</h5>
                                                    <p class="card-text">{value.id}</p>
                                                    <p class="card-text">{value.title}</p>
                                                    <p class="card-text">{value.completed ? (
                                                        <span className="badge bg-success">Completed</span>
                                                    ) : (
                                                        <span className="badge bg-warning text-dark">Pending</span>
                                                    )}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
import React from 'react'
// fetch data from github api

const fetchRepos = async ()=>{
    const res = await fetch('https://api.github.com/users/Bezyl-Mophat-Otieno/repos')
    const repos = await res.json()
    return repos
}

const  ReposPage = async ()=> {
    const repos = await fetchRepos()
    console.log(repos)
  return (
    <div>
      <h1>{repos[3].name}</h1>
    </div>
  )
}

export default ReposPage
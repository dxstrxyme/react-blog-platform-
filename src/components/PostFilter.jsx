import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

function PostFilter({filter , setFilter}) {
  return (
    <div>
        <MyInput
        value={filter.query}
        onChange={e=>setFilter({...filter,query:e.target.value})}
        placeholder='find...'
        />
        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
        defaultValue='sorted'
        options={[
          {value:'title',name:'by name'},
          {value:'body',name:'by inner'}
        ]}
        />
      </div>
  )
}

export default PostFilter
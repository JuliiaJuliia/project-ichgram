import React, { useState } from 'react';

const CreatePost = () => {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text && !selectedFile) return alert('Введите текст или выберите файл');

    const formData = new FormData();
    formData.append('text', text);
    if (selectedFile) formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // предполагаем, что токен хранится в localStorage
        },
        body: formData
      });

      if (!response.ok) throw new Error('Ошибка при создании поста');

      const result = await response.json();
      console.log('Пост создан:', result);
      setText('');
      setSelectedFile(null);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Что у вас нового?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Создать пост</button>
    </form>
  );
};

export default CreatePost;
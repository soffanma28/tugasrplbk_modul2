import { useState } from 'react';
import { profile } from './components/Profile';
import { Wrap } from './components/Styled';

function App() {
  const [result, setResult] = useState([]);
  const search = (e) => {
    setResult(profile.filter((item) => item.nama_lengkap.toLowerCase().includes(e.target.value)));
  };

  return (
    <Wrap>
      <h1>Data Aegis</h1>
      <div className='kelompok'>
        <h3>Tugas Modul 2 - Kelompok 29</h3>
          <h5>Rizaldy Imam Khadafi - 21120119140119</h5>
          <h5>Kevin Ryo Pratama - 21120119130098</h5>
          <h5>Soffan Marsus Ahmad - 21120119130042</h5>
      </div>
      <div className="container">
        <input id="textInput" type="text" onChange={search} />
        <h5>Search by Nama</h5>
        <div className="hasil">
          {result.length === 0 ? (
            <p className="error">Data Tidak Ada</p>
          ) : (
            result.map((item) => (
              <div className="card" key={item.nim}>
                <p>{item.nama_lengkap}</p>
                <p>{item.nama_panggilan}</p>
                <p>{item.nomor_telepon}</p>
                <p>{item.id_line}</p>
                <p>{item.nim}</p>
                <p>{item.email}</p>
                <p>{item.hobi}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </Wrap>
  );
}

export default App;
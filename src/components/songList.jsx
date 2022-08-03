import React from 'react'
import nhac from '../assets/audio/nhacdemo.mp3'

function SongList() {
  return (
   <table className="table align-middle mb-0 bg-white shadow p-3 mb-5 bg-body rounded">
  <thead className="bg-light">
    <tr>
      <th>Author</th>
      <th>Name</th>
      <th>Gerne</th>
      <th>Audio</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt style={{width: 45, height: 45}} className="rounded-circle" />
          <div className="ms-3">
            <p className="fw-bold mb-1">Bruno Mars</p>
            <p className="text-muted mb-0">Bruno.Mars@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Leave the door open</p>
        <p className="text-muted mb-0">US / UK</p>
      </td>
      <td>
        <span className="text-black rounded-pill d-inline">Pop</span>
      </td>
      <td>
      <audio src={nhac} controls></audio>

      </td>
      <td>
        <button type="button" className="btn btn-info btn-sm btn-rounded fw-bold text-white">
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold mx-2" data-mdb-ripple-color="dark">
          Delete
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" alt style={{width: 45, height: 45}} />
          <div className="ms-3">
            <p className="fw-bold mb-1">Adele</p>
            <p className="text-muted mb-0">Adele.ray@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Hello</p>
        <p className="text-muted mb-0">US / UK</p>
      </td>
      <td>
        <span className="text-black rounded-pill d-inline">Rockn'Roll</span>
      </td>
      <td>
        <audio src={nhac} controls></audio>
      </td>
      <td>
        <button type="button" className="btn btn-info btn-sm btn-rounded fw-bold text-white">
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold mx-2" data-mdb-ripple-color="dark">
          Delete
        </button>
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img src="https://mdbootstrap.com/img/new/avatars/7.jpg" className="rounded-circle" alt style={{width: 45, height: 45}} />
          <div className="ms-3">
            <p className="fw-bold mb-1">Katy Perry</p>
            <p className="text-muted mb-0">Katy.Perry@gmail.com</p>
          </div>
        </div>
      </td>
      <td>
        <p className="fw-normal mb-1">Roar</p>
        <p className="text-muted mb-0">US / UK</p>
      </td>
      <td>
        <span className="text-black rounded-pill d-inline">Ballad</span>
      </td>
      <td>
      <audio src={nhac} controls></audio>

      </td>
      <td>
        <button type="button" className="btn btn-info btn-sm btn-rounded fw-bold text-white">
          Edit
        </button>
        <button type="button" className="btn btn-danger btn-rounded btn-sm fw-bold mx-2" data-mdb-ripple-color="dark">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>

  )
}

export default SongList
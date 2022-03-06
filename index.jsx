import Link from "next/link";

const index = () => {
  return (
    <div className='container border border-3 w-50 text-center mx-auto my-2 py-2'>
        <div>
            <h2 className='text-secondary'>Main Menu</h2>
            <hr />
        </div>
        <div>
        <Link href="/submenu">
        <a className='btn btn-primary text-white my-2 px-3'>Create Team</a>
        </Link>
        </div>
        <div>
        <a className='btn btn-secondary text-white my-2 px-3' href="https://github.com/Jibril12303" target={"_blank"}>Github Profile</a>
        </div>
        <div>
        <a className='btn btn-warning text-white my-2 px-3' href="mailto:dummy@example.com">Email</a>
        </div>
    </div>
  )
}

export default index
import "./left_component.css"

export default function LeftComponents() {
    return (
        <>
            <div className="box">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#library">Library</a></li>
                    <li><a href="#playlists">Playlists</a></li>
                    <li><a href="#feedback">Feedback</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </>
    );
}
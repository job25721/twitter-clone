export const Tweet = ({ msg, time, img }) => {
  return (
    <div className="my-5">
      <div className="flex">
        <img
          src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/109632694_688668535322958_4102403510138700454_n.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeG7ZaEbzxexoQZfCJSXXfb7SCrDKwY0FfJIKsMrBjQV8qxv0vGcVta2yn6QS2FYz26Jba3e5VzLMZdb8i1FiGfG&_nc_ohc=W8XerPfd1p0AX_WiPgp&_nc_ht=scontent.fbkk12-2.fna&oh=6d03833627bd7ede3bcba3932d51bbcc&oe=5FFAA495"
          alt=""
          className="rounded-full h-12 w-12"
        />
        <div className="pl-3">
          <span>Pathomporn</span>
          <span className="text-gray-300 pl-1 text-xs">@pathompxrn.p</span>
          <span className="text-xs"> • {time}</span>
          {msg.map((m, i) => (
            <p key={i}>{m}</p>
          ))}
          {img !== "" ? (
            <img
              src={img}
              alt=""
              className="rounded-xl border- border-gray-100 shadow"
              style={{ cursor: "pointer" }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

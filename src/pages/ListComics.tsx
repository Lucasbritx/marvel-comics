import React, { useEffect, useState, useCallback, FC, useRef } from "react";
import DotLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import marvelLogo from "../assets/images/Marvel-Logo.png";
import heart from "../assets/images/heart.png";
import heartSelected from "../assets/images/heartSelected.png";
import Modal from "../components/Modal";
import api from "../middlewares/axios";
import emailjs from "../utils/emailjs";

interface IThumbnail {
  extension: string;
  path: string;
}

interface IComic {
  id?: number;
  description: string;
  title: string;
  thumbnail: IThumbnail;
}

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const useOutsideClick = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const ListComics: FC = () => {
  const [comics, setComics] = useState<IComic[]>([]);
  const [comicsToSend, setComicsToSend] = useState<IComic[]>([]);
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState("");
  const [comicIndex, setComicIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const ImageNotFound = "Imagem não encontrada!";

  const getComicsByFilter = useCallback(
    async (comicsUrl: string) => {
      return await api.get(comicsUrl, {
        params: {
          titleStartsWith: filter,
        },
      });
    },
    [filter]
  );

  const getInitialComics = useCallback(async (comicsUrl: string) => {
    return await api.get(comicsUrl);
  }, []);

  const sendEmail = async () => {
    try {
      setLoading(true);
      await emailjs(email, convertComicsJSONtoString());
      toast.success("E-mail enviado");
      setComicsToSend([])
      setEmail("");
      setLoading(false);
    } catch (error) {
      toast.error("Erro ao enviar o e-mail");
    }
  };

  const getComics = useCallback(async () => {
    const comicsUrl = `/comics?offset=${offset}`;
    try {
      setLoading(true);
      const { data } = !!filter
        ? await getComicsByFilter(comicsUrl)
        : await getInitialComics(comicsUrl);

      setComics(data.data.results);
      setLoading(false);
    } catch (error) {
      setComics([]);
    }
  }, [offset, filter, getComicsByFilter, getInitialComics]);

  const ref = useRef();

  useOutsideClick(ref, () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  useEffect(() => {
    if(filter.length === 0 || filter.length >= 3) {
      const delayFilter = setTimeout(() => {          
          if(offset >= 1){
            setOffset(0);
          } else {
            getComics();
          }
      }, 500);

      return () => {
        clearTimeout(delayFilter);
      };
    };
  }, [filter]);

  useEffect(() => { 
    getComics();
  }, [offset]);

  const renderModal = (comicIndex: number) => {
    setShowModal(true);
    setComicIndex(comicIndex);
  };

  const listComics = () => {
    return comics.map((comic: IComic, index: number) => {
      return (
        <li
          key={comic.id}
          className={`container-comic ${
            isComicSelected(comic.id) ? "hq-selected" : ""
          }`}
        >
          <img
            className="comic-image"
            alt={ImageNotFound}
            src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
          />
          <div
            onClick={() => {
              renderModal(index);
            }}
            className="description"
          >
            {comic.title}
          </div>

          <div className={`select ${
            loading ? "display-none" : ""
          }`}>
            <img
              className={`heart`}
              alt={ImageNotFound}
              onClick={() => {
                if (isComicSelected(comic.id)) {
                  removeHqToSend(comic.id);
                } else {
                  selectHqToSend(comic.id);
                }
              }}
              src={isComicSelected(comic.id) ? heartSelected : heart}
            />
          </div>
        </li>
      );
    });
  };

  const isComicSelected = (comicId: any) => { 
      if (comicsToSend.length > 0) {
        return comicsToSend.some((comic) => comic.id === comicId);
      } else {
        return false;
      }
    }


  const selectHqToSend = (comicId: any) => {
    const comicsSelecteds = comicsToSend;
    const comic = comics?.find((comic) => comic.id === comicId);
    if (comic) {
      comicsSelecteds.push({
        id: comic.id,
        description: comic.description,
        thumbnail: comic.thumbnail,
        title: comic.title,
      });
    }
    setComicsToSend([...comicsSelecteds]);
  };

  const removeHqToSend = (comicId: any) => {
    const comicsSelecteds = comicsToSend.filter(
      (comic) => comic.id !== comicId
    );
    setComicsToSend(comicsSelecteds);
  };

  const convertComicsJSONtoString = () => {
    return comicsToSend.map((c: IComic)=> {
      return `
        <p>
          Title: ${c.title}
        </p>
        <img 
          src="${c.thumbnail.path}.${c.thumbnail.extension}" 
          alt="${c.title}"
          style="width: 12rem;"
        />
        ${c.description ? `<p>
        Description:
        ${c.description}
        </p>` : ''}
      `
    })
  };

  const validateEmail = ():boolean =>  
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

  return (
    <>
      <div className="header">
        <div className="div-logo">
          <img className="logo" alt={ImageNotFound} src={marvelLogo} />
        </div>

        <div className="div-send-email-button">
          <input
            value={email}
            placeholder="Digite o seu e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button disabled={!email || loading || !validateEmail() || !comicsToSend.length } onClick={sendEmail}>
            Enviar e-mail
          </button>
        </div>
      </div>
      <div className="filter">
        <input
          placeholder="Digite ao menos 3 caracteres!"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      {loading && (
        <div className="spinner">
          <DotLoader color="red" loading={loading} css={override} size={150} />
        </div>
      )}
      {!loading && (
        <div className="container-comics">
          <ul className="list-comics">{listComics()}</ul>
        </div>
      )}
      {comics.length > 0 && (
        <div className="container-pagination">
          <button
            disabled={offset === 0 || loading}
            className="hq-button"
            onClick={() => {
              setOffset((prevState) => prevState - 20);
            }}
          >
            &lt;
          </button>
          <div className="pagination">
            {<p>{!!offset ? offset / 20 + 1 : 1}</p>}
          </div>
          <button
            disabled={loading}
            className={`${loading} ? '' : hq-button`}
            onClick={() => {
              setOffset((prevState) => prevState + 20);
            }}
          >
            &gt;
          </button>
        </div>
      )}
      <Modal
        modalRef={ref}
        show={showModal}
        handleClose={() => setShowModal(false)}
      >
        <div className="modal-comics"></div>
        <div className="hq-info">
          {comics.length ? (
            <img
              alt={ImageNotFound}
              src={`${comics[comicIndex].thumbnail.path}/portrait_incredible.${comics[comicIndex].thumbnail.extension}`}
            />
          ) : (
            ""
          )}
          <div className="hq-info-text">
            <p>{comics.length ? comics[comicIndex].title : ""}</p>
            <p>{comics.length ? comics[comicIndex].description : ""}</p>
            <button
              className="select-hq-button"
              onClick={() => {
                if (isComicSelected(comics[comicIndex]?.id)) {
                  removeHqToSend(comics[comicIndex]?.id);
                  setShowModal(false);
                } else {
                  selectHqToSend(comics[comicIndex]?.id);
                  setShowModal(false);
                }
              }}
            >
              {isComicSelected(comics[comicIndex]?.id)
                ? "Remover da lista"
                : "Selecionar"}
            </button>
          </div>
        </div>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ListComics;

import React, { useEffect, useState, useCallback, FC, useRef } from 'react';
import Modal from '../components/Modal';
import api from '../middlewares/axios';

interface IThumbnail {
    extension: string;
    path: string;
}

interface IComic {
    id: number;
    digitalId: number;
    description: string;
    title: string;
    thumbnail: IThumbnail;
}

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
    const [comicsFiltereds, setComicsFiltereds] = useState<IComic[]>([]);
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState("");
    const [comicIndex, setComicIndex] = useState(0);
    
    const [showModal, setShowModal] = useState(false);

    const getComicsByFilter = useCallback(async (comicsUrl: string) => {
        return await api.get(comicsUrl, {
            params: {
                titleStartsWith: filter,
            },
        });
    },[filter])

    const getInitialComics = useCallback(async (comicsUrl: string) => {
        return await api.get(comicsUrl);
    },[])
    
    const getComics = useCallback(async () => {
        const comicsUrl = `/comics?offset=${offset}`;
        try {
            const { data } = !!filter ? await getComicsByFilter(comicsUrl) : await getInitialComics(comicsUrl);
            
            setOffset(data.data.offset)
            setComics(data.data.results);            
        } catch (error) {
            setComics([]);
        }    
    },[offset, filter, getComicsByFilter, getInitialComics]);

    
    const ref = useRef();

    useOutsideClick(ref, () => {
        if(showModal){
            setShowModal(false);
        }
    });


    useEffect(()=> {
        const delayFilter = setTimeout(getComics, 500);
        setOffset(0);
        
        return ()=>{
            clearTimeout(delayFilter)
        }
    }, [filter]);
    
    
    const renderModal = (comicIndex: number) => {
        setShowModal(true);
        setComicIndex(comicIndex);
    }
    
    const listComics = (c: any) => {
        return c.map((comic: IComic, index: number) => {
            return (
                <li key={comic.id} className="container-comic">
                    <img src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}/>
                    <div 
                        onClick={()=> {
                            renderModal(index);
                        }} 
                        className="description">
                        {comic.title}
                    </div>
                </li>
                )
            })
        };
        
        // useEffect(()=> {}, [comics]);       
        
        useEffect(() => {
            getComics();
        }, [offset]);
        
        useEffect(()=> {
            const comicsFiltered = comics.filter((comic: IComic) => {
                return comic.title.toLowerCase().includes(filter.toLowerCase());
            })
            setComicsFiltereds(comicsFiltered);
        }, [filter, comics]);
        
        
        return (
            <>
            <div className="filter">
                <input
                    placeholder="Digite ao menos 3 caracteres!" 
                    value={filter} 
                    onChange={((e) => {setFilter(e.target.value)})}
                />
            </div>
            <div className="container-comics">
                <ul className="list-comics">
                    {listComics(filter.length || comicsFiltereds.length ? comicsFiltereds : comics )}
                </ul>
            </div>
            {(comics.length > 0) && (
                <div className="container-filter">
                    {offset > 0  && (
                        <button onClick={()=>{setOffset(prevState => prevState - 20)}}>
                            prev
                        </button>
                    )}
                    {<p>{offset + 1}</p>}
                    <button onClick={()=>setOffset(prevState => prevState + 20)}>next</button>
                </div>
            )}
                <Modal modalRef={ref} show={showModal} handleClose={(()=> setShowModal(false))}>
                    <div className="modal-comics">
                    </div>
                    <div className="hq-info">
                    { comics.length ?
                        <img src={`${comics[comicIndex].thumbnail.path}/portrait_incredible.${comics[comicIndex].thumbnail.extension}`}/>
                        : ''
                    }
                    <div className="hq-info-text">
                        <p>{ comics.length ? comics[comicIndex].title : ''}</p>
                        <p>{ comics.length ? comics[comicIndex].description : ''}</p>
                    </div>
                    </div>
                </Modal>
                </>
                )
            }
            
            export default ListComics;
            
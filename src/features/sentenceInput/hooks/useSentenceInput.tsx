import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSentenceUseCase } from "../useCases/setSentenceUseCase";
import debounce from "lodash.debounce";

export const useSentenceInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  //lodash の debounce を使って、500ms の間入力が止まったときのみ setSentence を実行
  const debouncedAdd = useCallback(
    debounce((text: string) => {
      //usecase を呼び出す。 textと責任分離のためにdispatchも渡す。
      setSentenceUseCase(dispatch, text);
    }, 500),
    //実際は変わらない（だから [dispatch] を入れなくてもたぶんバグらない）が、eslint の警告を消すために入れている。
    [dispatch]
  );

  //input が変化するたびに、debounced 処理を実行。
  useEffect(() => {
    //ただし、input が空文字のときは送信しない。
    if (input) {
      debouncedAdd(input);
    }
    //inputがかわる直前とコンポーネントが消えるときに実行。まだ実行されていない debounced 処理を中止する。
    return () => debouncedAdd.cancel();
  }, [input, debouncedAdd]);

  return { input, setInput };
};

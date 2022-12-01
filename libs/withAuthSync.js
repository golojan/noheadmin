import React, { useEffect } from "react";
import { useAtom } from "jotai";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { isLoggedInAtom, accidAtom, userAtom, pagesAtom } from "../store";

// Login & Create session for a given minutes time
export const authLogin = ({ token }) => {
  const expire_time = process.env.COOKIE_TIME_IN_MINS || 10;
  const inMinutes = new Date(new Date().getTime() + expire_time * 60 * 1000);
  cookie.set("token", token, { expires: inMinutes });
  Router.push("/dashboard");
};

export const auth = (ctx) => {
  const { token } = nextCookie(ctx);
  // If there's no token, it means the user is not logged in.
  if (ctx.req && !token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
  return token;
};

export const authlogout = () => {
  cookie.remove("token");
  // to support logging out from all windows
  window.localStorage.setItem("logout", `${Date.now()}`);
  Router.push("/");
};

const updateUser = async (_token) => {
  const response = await fetch(`/api/accounts/${_token}/info`);
  const userinfo = await response.json();
  return userinfo;
};

const getPages = async () => {
  const response = await fetch(`/api/pages/list`);
  const pages = await response.json();
  return pages;
};


export const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [, setAccid] = useAtom(accidAtom);
    const [, setLoggedIn] = useAtom(isLoggedInAtom);
    const [, setUserInfo] = useAtom(userAtom);
    const [, setPages] = useAtom(pagesAtom);

    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        Router.push("/");
      }
    };
    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      const token = cookie.get("token");
      if (token) {
        //   updateUser(token)
        //     .then((info) => {
        //       setUserInfo(info);
        //     })
        //     .catch();
        //   setLoggedIn(true);
        //   setAccid(token);
      }

      getPages().then((_pages) => {
        setPages(_pages.list);
      }).catch();

      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };

    }, [setPages]);

    return <WrappedComponent {...props} />;
  };
  Wrapper.getInitialProps = async (ctx) => {
    const token = auth(ctx);
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, token };
  };
  return Wrapper;
};

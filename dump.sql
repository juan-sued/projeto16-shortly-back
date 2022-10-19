--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    user_id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    views integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email character varying(100),
    password text
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (7, 6, '{"url":"https://ronaldinhogauchoteste.com.br"}', '2LgpYmaBB2', 0, '2022-10-16 22:17:34.444098');
INSERT INTO public.links VALUES (15, 6, '{"url":"https://ronaldinhogauchoteste.com.br"}', 'KLySSi41A3', 0, '2022-10-18 17:19:22.359574');
INSERT INTO public.links VALUES (16, 6, '{"url":"https://ronaldinhogauchoteste.com.br"}', '82cRBgBrmn', 0, '2022-10-18 17:31:32.526659');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$nWFCuIf.XkqsZfdvtVHV..Yq37NRRUaRiPJ8Thx3c1EA16WkfRVZ6');
INSERT INTO public.users VALUES (2, 'João', 'joao2@driven.com.br', '$2b$10$NvCTb.Lal3rpodJAuJLsU.gMvir6VucBRIcKiAF8EW38RJY63Yf.m');
INSERT INTO public.users VALUES (3, 'João', 'joao2@driven.com.br', '$2b$10$xHsxNFMiie2sw2pTlJU7dOAz.BDQm0XxD36vOyA6uqQlkN9Uvb9..');
INSERT INTO public.users VALUES (4, 'João', 'joao2@driven.com.br', '$2b$10$k4/5.ImZozzDBpAGfhvaa.uEmTcO/h0T1U2yAC.9ZCEbBGjafrn9S');
INSERT INTO public.users VALUES (5, 'João', 'joao2@driven.com.br', '$2b$10$PN6/xIotuulvK18wM3k9yuwt8ZagDhNFjXggQ4rGgKuv6HJ0EaIgm');
INSERT INTO public.users VALUES (6, 'João', 'joao3@driven.com.br', '$2b$10$xMVXBGOJJ0pHaFnLuAyq5e2yLK.uqwAA4JyYese1WHjoZ6S7WaQuq');
INSERT INTO public.users VALUES (7, 'João', 'joao4@driven.com.br', '$2b$10$yVTivPdX39HcaBD5kyClC.7tbyXxGZPB.YoX5zD6ZQZn08JqIKNG2');
INSERT INTO public.users VALUES (8, 'João', 'joao5@driven.com.br', '$2b$10$zfGJXfgB8uKDQDwsVCUJA.tptXgpRyLbnbAXKJfE/Ohw5Xy7KF8r6');
INSERT INTO public.users VALUES (9, 'João', 'joao6@driven.com.br', '$2b$10$5fBbySjmIgLTAz5/BooMtO05A/JBuusR5kdIrAwxUIa9J0KSioM92');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: links links_short_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_short_url_key UNIQUE (short_url);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5 (Debian 11.5-3.pgdg90+1)
-- Dumped by pg_dump version 11.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


--
-- Name: checkins; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.checkins (
    id integer NOT NULL,
    student_id integer NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: checkins_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.checkins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: checkins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.checkins_id_seq OWNED BY public.checkins.id;


--
-- Name: help_orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.help_orders (
    id integer NOT NULL,
    student_id integer NOT NULL,
    question character varying(255) NOT NULL,
    answer character varying(255),
    answer_at timestamp with time zone,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: help_orders_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.help_orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: help_orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.help_orders_id_seq OWNED BY public.help_orders.id;


--
-- Name: plans; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.plans (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    duration integer NOT NULL,
    price numeric NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: plans_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.plans_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: plans_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.plans_id_seq OWNED BY public.plans.id;


--
-- Name: student_enrollments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.student_enrollments (
    id integer NOT NULL,
    student_id integer NOT NULL,
    plan_id integer NOT NULL,
    start_date timestamp with time zone NOT NULL,
    end_date timestamp with time zone NOT NULL,
    price numeric NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: student_enrollments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.student_enrollments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: student_enrollments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.student_enrollments_id_seq OWNED BY public.student_enrollments.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    age integer NOT NULL,
    weight numeric NOT NULL,
    height numeric NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    provider boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    administrator boolean
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
-- Name: checkins id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.checkins ALTER COLUMN id SET DEFAULT nextval('public.checkins_id_seq'::regclass);


--
-- Name: help_orders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.help_orders ALTER COLUMN id SET DEFAULT nextval('public.help_orders_id_seq'::regclass);


--
-- Name: plans id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plans ALTER COLUMN id SET DEFAULT nextval('public.plans_id_seq'::regclass);


--
-- Name: student_enrollments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.student_enrollments ALTER COLUMN id SET DEFAULT nextval('public.student_enrollments_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."SequelizeMeta" (name) FROM stdin;
20191019192323-create-users.js
20191020201329-create-students.js
20191026132215-create-plans.js
20191026180142-create-students_enrollment.js
20191027210931-create-checkins.js
20191027214207-create-users-add-collumn-administrator.js
20191028114840-create-help-orders.js
\.


--
-- Data for Name: checkins; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.checkins (id, student_id, created_at, updated_at) FROM stdin;
2	1	2019-12-31 01:38:55.788+00	2019-12-31 01:38:55.788+00
1	1	2019-12-30 01:18:13.315+00	2019-12-31 01:18:13.315+00
3	1	2020-01-04 13:46:10.082+00	2020-01-04 13:46:10.082+00
\.


--
-- Data for Name: help_orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.help_orders (id, student_id, question, answer, answer_at, created_at, updated_at) FROM stdin;
2	1	Quero saber porque o valor da minha mensalidade esta maior?	Porque houve reajuste este mês em todas as mensalidades.	2019-12-02 10:24:48.071+00	2019-10-29 01:00:27.695+00	2019-12-02 10:24:48.076+00
8	1	Olá gostaria de saber se tenho como fazer as aulas com um personal trainer?	Claro que não né! Vc tem que utilizar os nossos professores ou personal trainners.	2019-12-16 23:23:21.126+00	2019-12-16 03:10:29.284+00	2019-12-16 23:23:21.131+00
5	1	Como posso fazer para conseguir um ganho de massa muscular mais efetivo?	\N	2020-01-03 00:32:44.62+00	2019-12-03 04:35:56.578+00	2020-01-03 00:32:44.621+00
\.


--
-- Data for Name: plans; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.plans (id, title, duration, price, created_at, updated_at) FROM stdin;
2	Gold	3	109	2019-10-26 14:03:54.774+00	2019-10-26 14:03:54.774+00
3	Diamond	6	89	2019-10-26 14:04:11.145+00	2019-10-26 14:04:11.145+00
1	Start	1	129	2019-10-26 14:02:44.943+00	2019-11-29 11:13:16.604+00
5	Emerald	12	79	2019-12-03 02:55:19.568+00	2019-12-18 03:01:47.07+00
\.


--
-- Data for Name: student_enrollments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.student_enrollments (id, student_id, plan_id, start_date, end_date, price, created_at, updated_at) FROM stdin;
1	1	3	2019-10-28 21:00:00+00	2020-04-28 21:00:00+00	534	2019-10-27 04:33:43.976+00	2019-10-27 20:54:52.847+00
8	3	2	2019-10-30 15:00:00+00	2020-01-30 14:00:00+00	327	2019-10-28 11:34:45.344+00	2019-10-28 11:34:45.344+00
9	4	1	2019-11-29 12:38:55.999+00	2019-12-29 12:38:55.999+00	89	2019-11-28 12:38:55.203+00	2019-11-28 12:38:55.203+00
13	6	2	2019-12-04 04:32:54.999+00	2020-03-04 05:32:54.999+00	327	2019-12-03 04:32:54.724+00	2019-12-03 04:32:54.724+00
14	7	5	2019-12-19 03:01:23.999+00	2020-12-19 03:01:23.999+00	948	2019-12-03 04:33:35.136+00	2019-12-18 03:01:23.393+00
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.students (id, name, email, age, weight, height, created_at, updated_at) FROM stdin;
3	Juliano Santos	julianocripto1@gmail.com	36	75.6	1.73	2019-10-21 01:29:50.664+00	2019-10-21 01:29:50.664+00
4	Bruna Lemos	brunnalemos@yahoo.com.br	34	55	1.73	2019-11-28 10:59:00.152+00	2019-11-28 10:59:00.152+00
1	Juliano	julianossantos@gmail.com	36	75.6	1.73	2019-10-21 01:24:06.093+00	2019-11-28 11:03:20.473+00
6	Cauê Santos	cauesantos@gmail.com	15	45	1.73	2019-11-28 12:36:48.824+00	2019-11-28 12:36:48.824+00
8	Teste2 da Silva	teste1@gmail.com	34	55	1.73	2019-11-28 20:18:49.58+00	2019-11-28 20:18:49.58+00
9	Teste3 da Silva	teste3@gmail.com	34	55	1.73	2019-11-28 20:18:59.786+00	2019-11-28 20:18:59.786+00
12	Teste6 da Silva	teste6@gmail.com	34	55	1.73	2019-11-28 20:19:45.469+00	2019-11-28 20:19:45.469+00
13	Teste7 da Silva	teste7@gmail.com	34	55	1.73	2019-11-28 20:20:29.661+00	2019-11-28 20:20:29.661+00
10	Teste4 da Silva	teste4@gmail.com	32	55	1.73	2019-11-28 20:19:07.639+00	2019-11-28 20:42:43.405+00
11	Teste 5 da Silva	teste5@gmail.com	30	50	1.6	2019-11-28 20:19:12.881+00	2019-12-18 03:02:13.201+00
7	Teste1 da Silva	teste1@gmail.com.br	34	55	1.73	2019-11-28 20:18:35.043+00	2020-01-04 14:16:25.858+00
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, name, email, password_hash, provider, created_at, updated_at, administrator) FROM stdin;
4	Juliano Santos	julianocripto1@gmail.com	$2a$08$IB.sr64iQsccVv2p/fOlH.ESoGNA7hYF2/bxNamsX/tei0mJQP0ge	f	2019-10-19 21:32:00.142+00	2019-10-19 21:32:00.142+00	\N
5	Juliano Santos	julianocripto2@gmail.com	$2a$08$KAhedeqg4bOAmHFcPXNkG.IYqQZsP9p/7zyIcRBdGvfPm.huFJXAC	f	2019-10-19 21:46:08.325+00	2019-10-19 21:46:08.325+00	\N
6	Juliano	julianocripto3@gmail.com	$2a$08$gTCEnx074vLL9bw2Sr5lOO2s03l1wIs82tZP4n5XLB2LBslogwR8y	f	2019-10-20 20:07:03.883+00	2019-10-20 20:56:12.857+00	\N
7	Juliano	julianocripto4@gmail.com	$2a$08$2gBSBi66Vo7typiNT5d3LeRGdTJNg2DWZx2ATfmnYrZx9AqDXgARG	f	2019-10-20 22:17:11.739+00	2019-10-20 22:17:11.739+00	\N
3	Juliano Santos	julianossantos@gmail.com	$2a$08$Ri0QapOvAH8pBgwVbwnHWOYdNM8bSDh.KNaeBrSQDmgDIkIfmNHd6	f	2019-10-19 20:34:21.601+00	2019-10-19 20:34:21.601+00	\N
1	Administrador	admin@gympoint.com	$2a$08$kmBWrRi7nEMkNmlxAKHaPOS0qf6xSImUULGUjsvZfpOZljcF9bzHm	t	2019-10-19 19:25:47.577+00	2019-10-19 19:25:47.577+00	t
\.


--
-- Name: checkins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.checkins_id_seq', 3, true);


--
-- Name: help_orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.help_orders_id_seq', 22, true);


--
-- Name: plans_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.plans_id_seq', 5, true);


--
-- Name: student_enrollments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.student_enrollments_id_seq', 14, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: checkins checkins_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.checkins
    ADD CONSTRAINT checkins_pkey PRIMARY KEY (id);


--
-- Name: help_orders help_orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.help_orders
    ADD CONSTRAINT help_orders_pkey PRIMARY KEY (id);


--
-- Name: plans plans_duration_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_duration_key UNIQUE (duration);


--
-- Name: plans plans_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.plans
    ADD CONSTRAINT plans_pkey PRIMARY KEY (id);


--
-- Name: student_enrollments student_enrollments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.student_enrollments
    ADD CONSTRAINT student_enrollments_pkey PRIMARY KEY (id);


--
-- Name: students students_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_email_key UNIQUE (email);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: checkins checkins_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.checkins
    ADD CONSTRAINT checkins_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: help_orders help_orders_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.help_orders
    ADD CONSTRAINT help_orders_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: student_enrollments student_enrollments_plan_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.student_enrollments
    ADD CONSTRAINT student_enrollments_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES public.plans(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: student_enrollments student_enrollments_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.student_enrollments
    ADD CONSTRAINT student_enrollments_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.students(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--


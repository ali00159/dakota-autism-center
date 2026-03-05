drop extension if exists "pg_net";

create schema if not exists "dreamlit";

create sequence "dreamlit"."error_log_id_seq";


  create table "dreamlit"."error_log" (
    "id" integer not null default nextval('dreamlit.error_log_id_seq'::regclass),
    "details" jsonb not null
      );



  create table "dreamlit"."event_log" (
    "id" uuid not null default gen_random_uuid(),
    "created_at" timestamp with time zone default CURRENT_TIMESTAMP,
    "schema_name" text,
    "table_name" text,
    "operation" text,
    "workflow_id" text,
    "logged_function_name" text,
    "old_row" jsonb,
    "new_row" jsonb
      );



  create table "dreamlit"."version" (
    "version" text not null,
    "upgraded_on" timestamp with time zone not null
      );



  create table "public"."mali-design-works-contact_submissions" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "email" text not null,
    "company" text,
    "interests" text[] default '{}'::text[],
    "budget" text,
    "message" text,
    "created_at" timestamp with time zone not null default now(),
    "org_id" uuid not null
      );


alter table "public"."mali-design-works-contact_submissions" enable row level security;


  create table "public"."memberships" (
    "user_id" uuid not null,
    "org_id" uuid not null,
    "created_at" timestamp with time zone not null default now()
      );


alter table "public"."memberships" enable row level security;


  create table "public"."organizations" (
    "org_id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "created_at" timestamp with time zone not null default now(),
    "tables" text[] default '{}'::text[]
      );


alter table "public"."organizations" enable row level security;


  create table "public"."xtra-hand-solutions-contact_submissions" (
    "id" uuid not null default gen_random_uuid(),
    "first_name" text not null,
    "last_name" text not null,
    "email" text not null,
    "phone" text,
    "service_type" text,
    "message" text not null,
    "created_at" timestamp with time zone default now(),
    "org_id" uuid not null
      );


alter table "public"."xtra-hand-solutions-contact_submissions" enable row level security;

alter sequence "dreamlit"."error_log_id_seq" owned by "dreamlit"."error_log"."id";

CREATE UNIQUE INDEX error_log_pkey ON dreamlit.error_log USING btree (id);

CREATE UNIQUE INDEX event_log_pkey ON dreamlit.event_log USING btree (id);

CREATE INDEX idx_event_log_created_at_id ON dreamlit.event_log USING btree (created_at, id);

CREATE UNIQUE INDEX version_pkey ON dreamlit.version USING btree (version);

CREATE UNIQUE INDEX contact_submissions_pkey ON public."mali-design-works-contact_submissions" USING btree (id);

CREATE INDEX idx_contact_submissions_created_at ON public."mali-design-works-contact_submissions" USING btree (created_at DESC);

CREATE INDEX idx_contact_submissions_email ON public."mali-design-works-contact_submissions" USING btree (email);

CREATE UNIQUE INDEX memberships_pkey ON public.memberships USING btree (user_id, org_id);

CREATE UNIQUE INDEX organizations_name_key ON public.organizations USING btree (name);

CREATE UNIQUE INDEX organizations_pkey ON public.organizations USING btree (org_id);

CREATE UNIQUE INDEX "xtra-hand-solutions-contact_submissions_pkey" ON public."xtra-hand-solutions-contact_submissions" USING btree (id);

alter table "dreamlit"."error_log" add constraint "error_log_pkey" PRIMARY KEY using index "error_log_pkey";

alter table "dreamlit"."event_log" add constraint "event_log_pkey" PRIMARY KEY using index "event_log_pkey";

alter table "dreamlit"."version" add constraint "version_pkey" PRIMARY KEY using index "version_pkey";

alter table "public"."mali-design-works-contact_submissions" add constraint "contact_submissions_pkey" PRIMARY KEY using index "contact_submissions_pkey";

alter table "public"."memberships" add constraint "memberships_pkey" PRIMARY KEY using index "memberships_pkey";

alter table "public"."organizations" add constraint "organizations_pkey" PRIMARY KEY using index "organizations_pkey";

alter table "public"."xtra-hand-solutions-contact_submissions" add constraint "xtra-hand-solutions-contact_submissions_pkey" PRIMARY KEY using index "xtra-hand-solutions-contact_submissions_pkey";

alter table "public"."mali-design-works-contact_submissions" add constraint "mali-design-works-contact_submissions_org_id_fkey" FOREIGN KEY (org_id) REFERENCES public.organizations(org_id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."mali-design-works-contact_submissions" validate constraint "mali-design-works-contact_submissions_org_id_fkey";

alter table "public"."memberships" add constraint "memberships_org_id_fkey" FOREIGN KEY (org_id) REFERENCES public.organizations(org_id) ON DELETE CASCADE not valid;

alter table "public"."memberships" validate constraint "memberships_org_id_fkey";

alter table "public"."memberships" add constraint "memberships_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."memberships" validate constraint "memberships_user_id_fkey";

alter table "public"."organizations" add constraint "organizations_name_key" UNIQUE using index "organizations_name_key";

alter table "public"."xtra-hand-solutions-contact_submissions" add constraint "xtra-hand-solutions-contact_submissions_org_id_fkey" FOREIGN KEY (org_id) REFERENCES public.organizations(org_id) ON UPDATE CASCADE ON DELETE SET NULL not valid;

alter table "public"."xtra-hand-solutions-contact_submissions" validate constraint "xtra-hand-solutions-contact_submissions_org_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION dreamlit.dreamlit_e230ba6e_public_mali_design_wo_e8aaea()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
    BEGIN
      BEGIN
        INSERT INTO dreamlit.event_log
          (schema_name, table_name, operation, workflow_id, logged_function_name, old_row, new_row)
        VALUES
          ('public',
           'mali-design-works-contact_submissions',
           TG_OP,
           'e230ba6e-387a-4b22-ba83-70191f4da196',
           'dreamlit_e230ba6e_public_mali_design_wo_e8aaea',
           to_jsonb(OLD),
           to_jsonb(NEW));
      EXCEPTION
        WHEN OTHERS THEN
          -- Log error
          BEGIN
            INSERT INTO dreamlit.error_log (details)
            VALUES (json_build_object(
              'error_message', 'An error occurred in trigger function',
              'schema_name', 'public',
              'table_name', 'mali-design-works-contact_submissions',
              'operation', TG_OP,
              'workflow_id', 'e230ba6e-387a-4b22-ba83-70191f4da196',
              'function_name', 'dreamlit_e230ba6e_public_mali_design_wo_e8aaea',
              'occurred_at', CURRENT_TIMESTAMP,
              'old_row', to_jsonb(OLD),
              'new_row', to_jsonb(NEW)
            ));
          EXCEPTION
            WHEN OTHERS THEN
              -- Try again with less info
              BEGIN
                INSERT INTO dreamlit.error_log (details)
                VALUES (json_build_object(
                  'error_message', 'Critical error: both main trigger and error logging failed',
                  'workflow_id', 'e230ba6e-387a-4b22-ba83-70191f4da196',
                  'function_name', 'dreamlit_e230ba6e_public_mali_design_wo_e8aaea',
                  'occurred_at', CURRENT_TIMESTAMP
                ));
              EXCEPTION
                WHEN OTHERS THEN
                  -- If even this fails, we give up silently to prevent transaction from failing
                  NULL;
              END;
          END;
      END;

      RETURN NULL;
    END;
    $function$
;

CREATE OR REPLACE FUNCTION dreamlit.dreamlit_eb940e0f_public_xtra_hand_solu_09234e()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
    BEGIN
      BEGIN
        INSERT INTO dreamlit.event_log
          (schema_name, table_name, operation, workflow_id, logged_function_name, old_row, new_row)
        VALUES
          ('public',
           'xtra-hand-solutions-contact_submissions',
           TG_OP,
           'eb940e0f-13ca-4455-8c22-740a77538cfb',
           'dreamlit_eb940e0f_public_xtra_hand_solu_09234e',
           to_jsonb(OLD),
           to_jsonb(NEW));
      EXCEPTION
        WHEN OTHERS THEN
          -- Log error
          BEGIN
            INSERT INTO dreamlit.error_log (details)
            VALUES (json_build_object(
              'error_message', 'An error occurred in trigger function',
              'schema_name', 'public',
              'table_name', 'xtra-hand-solutions-contact_submissions',
              'operation', TG_OP,
              'workflow_id', 'eb940e0f-13ca-4455-8c22-740a77538cfb',
              'function_name', 'dreamlit_eb940e0f_public_xtra_hand_solu_09234e',
              'occurred_at', CURRENT_TIMESTAMP,
              'old_row', to_jsonb(OLD),
              'new_row', to_jsonb(NEW)
            ));
          EXCEPTION
            WHEN OTHERS THEN
              -- Try again with less info
              BEGIN
                INSERT INTO dreamlit.error_log (details)
                VALUES (json_build_object(
                  'error_message', 'Critical error: both main trigger and error logging failed',
                  'workflow_id', 'eb940e0f-13ca-4455-8c22-740a77538cfb',
                  'function_name', 'dreamlit_eb940e0f_public_xtra_hand_solu_09234e',
                  'occurred_at', CURRENT_TIMESTAMP
                ));
              EXCEPTION
                WHEN OTHERS THEN
                  -- If even this fails, we give up silently to prevent transaction from failing
                  NULL;
              END;
          END;
      END;

      RETURN NULL;
    END;
    $function$
;

CREATE OR REPLACE FUNCTION public.dreamlit_auth_admin_executor(command text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'pg_catalog', 'public'
AS $function$
    BEGIN
      IF command IS NULL OR btrim(command) = '' THEN
        RAISE EXCEPTION 'Command must be provided';
      END IF;
      IF command !~* 'ON\s+"?auth"?\.' THEN
        RAISE EXCEPTION 'dreamlit auth executor only permits commands targeting auth schema';
      END IF;
      EXECUTE command;
    END;
    $function$
;

grant insert on table "dreamlit"."error_log" to "anon";

grant insert on table "dreamlit"."error_log" to "authenticated";

grant delete on table "dreamlit"."error_log" to "dreamlit_app";

grant insert on table "dreamlit"."error_log" to "dreamlit_app";

grant references on table "dreamlit"."error_log" to "dreamlit_app";

grant select on table "dreamlit"."error_log" to "dreamlit_app";

grant trigger on table "dreamlit"."error_log" to "dreamlit_app";

grant truncate on table "dreamlit"."error_log" to "dreamlit_app";

grant update on table "dreamlit"."error_log" to "dreamlit_app";

grant insert on table "dreamlit"."error_log" to "service_role";

grant insert on table "dreamlit"."error_log" to "supabase_auth_admin";

grant select on table "dreamlit"."event_log" to "anon";

grant select on table "dreamlit"."event_log" to "authenticated";

grant delete on table "dreamlit"."event_log" to "dreamlit_app";

grant insert on table "dreamlit"."event_log" to "dreamlit_app";

grant references on table "dreamlit"."event_log" to "dreamlit_app";

grant select on table "dreamlit"."event_log" to "dreamlit_app";

grant trigger on table "dreamlit"."event_log" to "dreamlit_app";

grant truncate on table "dreamlit"."event_log" to "dreamlit_app";

grant update on table "dreamlit"."event_log" to "dreamlit_app";

grant insert on table "dreamlit"."event_log" to "service_role";

grant select on table "dreamlit"."event_log" to "service_role";

grant insert on table "dreamlit"."event_log" to "supabase_auth_admin";

grant select on table "dreamlit"."event_log" to "supabase_auth_admin";

grant select on table "dreamlit"."version" to "anon";

grant select on table "dreamlit"."version" to "authenticated";

grant delete on table "dreamlit"."version" to "dreamlit_app";

grant insert on table "dreamlit"."version" to "dreamlit_app";

grant references on table "dreamlit"."version" to "dreamlit_app";

grant select on table "dreamlit"."version" to "dreamlit_app";

grant trigger on table "dreamlit"."version" to "dreamlit_app";

grant truncate on table "dreamlit"."version" to "dreamlit_app";

grant update on table "dreamlit"."version" to "dreamlit_app";

grant select on table "dreamlit"."version" to "service_role";

grant delete on table "public"."mali-design-works-contact_submissions" to "anon";

grant insert on table "public"."mali-design-works-contact_submissions" to "anon";

grant references on table "public"."mali-design-works-contact_submissions" to "anon";

grant select on table "public"."mali-design-works-contact_submissions" to "anon";

grant trigger on table "public"."mali-design-works-contact_submissions" to "anon";

grant truncate on table "public"."mali-design-works-contact_submissions" to "anon";

grant update on table "public"."mali-design-works-contact_submissions" to "anon";

grant delete on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant insert on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant references on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant select on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant trigger on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant truncate on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant update on table "public"."mali-design-works-contact_submissions" to "authenticated";

grant delete on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant insert on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant references on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant select on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant trigger on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant truncate on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant update on table "public"."mali-design-works-contact_submissions" to "dreamlit_app";

grant delete on table "public"."mali-design-works-contact_submissions" to "service_role";

grant insert on table "public"."mali-design-works-contact_submissions" to "service_role";

grant references on table "public"."mali-design-works-contact_submissions" to "service_role";

grant select on table "public"."mali-design-works-contact_submissions" to "service_role";

grant trigger on table "public"."mali-design-works-contact_submissions" to "service_role";

grant truncate on table "public"."mali-design-works-contact_submissions" to "service_role";

grant update on table "public"."mali-design-works-contact_submissions" to "service_role";

grant delete on table "public"."memberships" to "anon";

grant insert on table "public"."memberships" to "anon";

grant references on table "public"."memberships" to "anon";

grant select on table "public"."memberships" to "anon";

grant trigger on table "public"."memberships" to "anon";

grant truncate on table "public"."memberships" to "anon";

grant update on table "public"."memberships" to "anon";

grant delete on table "public"."memberships" to "authenticated";

grant insert on table "public"."memberships" to "authenticated";

grant references on table "public"."memberships" to "authenticated";

grant select on table "public"."memberships" to "authenticated";

grant trigger on table "public"."memberships" to "authenticated";

grant truncate on table "public"."memberships" to "authenticated";

grant update on table "public"."memberships" to "authenticated";

grant delete on table "public"."memberships" to "dreamlit_app";

grant insert on table "public"."memberships" to "dreamlit_app";

grant references on table "public"."memberships" to "dreamlit_app";

grant select on table "public"."memberships" to "dreamlit_app";

grant trigger on table "public"."memberships" to "dreamlit_app";

grant truncate on table "public"."memberships" to "dreamlit_app";

grant update on table "public"."memberships" to "dreamlit_app";

grant delete on table "public"."memberships" to "service_role";

grant insert on table "public"."memberships" to "service_role";

grant references on table "public"."memberships" to "service_role";

grant select on table "public"."memberships" to "service_role";

grant trigger on table "public"."memberships" to "service_role";

grant truncate on table "public"."memberships" to "service_role";

grant update on table "public"."memberships" to "service_role";

grant delete on table "public"."organizations" to "anon";

grant insert on table "public"."organizations" to "anon";

grant references on table "public"."organizations" to "anon";

grant select on table "public"."organizations" to "anon";

grant trigger on table "public"."organizations" to "anon";

grant truncate on table "public"."organizations" to "anon";

grant update on table "public"."organizations" to "anon";

grant delete on table "public"."organizations" to "authenticated";

grant insert on table "public"."organizations" to "authenticated";

grant references on table "public"."organizations" to "authenticated";

grant select on table "public"."organizations" to "authenticated";

grant trigger on table "public"."organizations" to "authenticated";

grant truncate on table "public"."organizations" to "authenticated";

grant update on table "public"."organizations" to "authenticated";

grant delete on table "public"."organizations" to "dreamlit_app";

grant insert on table "public"."organizations" to "dreamlit_app";

grant references on table "public"."organizations" to "dreamlit_app";

grant select on table "public"."organizations" to "dreamlit_app";

grant trigger on table "public"."organizations" to "dreamlit_app";

grant truncate on table "public"."organizations" to "dreamlit_app";

grant update on table "public"."organizations" to "dreamlit_app";

grant delete on table "public"."organizations" to "service_role";

grant insert on table "public"."organizations" to "service_role";

grant references on table "public"."organizations" to "service_role";

grant select on table "public"."organizations" to "service_role";

grant trigger on table "public"."organizations" to "service_role";

grant truncate on table "public"."organizations" to "service_role";

grant update on table "public"."organizations" to "service_role";

grant delete on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant insert on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant references on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant select on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant trigger on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant truncate on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant update on table "public"."xtra-hand-solutions-contact_submissions" to "anon";

grant delete on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant insert on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant references on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant select on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant trigger on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant truncate on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant update on table "public"."xtra-hand-solutions-contact_submissions" to "authenticated";

grant delete on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant insert on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant references on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant select on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant trigger on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant truncate on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant update on table "public"."xtra-hand-solutions-contact_submissions" to "dreamlit_app";

grant delete on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";

grant insert on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";

grant references on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";

grant select on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";

grant trigger on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";

grant truncate on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";

grant update on table "public"."xtra-hand-solutions-contact_submissions" to "service_role";


  create policy "Allow anonymous inserts"
  on "public"."mali-design-works-contact_submissions"
  as permissive
  for insert
  to anon
with check (true);



  create policy "Enable read access for all users"
  on "public"."mali-design-works-contact_submissions"
  as permissive
  for select
  to public
using (true);



  create policy "Enable read access for all users"
  on "public"."memberships"
  as permissive
  for select
  to public
using (true);



  create policy "Allow anonymous inserts"
  on "public"."xtra-hand-solutions-contact_submissions"
  as permissive
  for insert
  to public
with check (true);


CREATE TRIGGER dreamlit_e230ba6e_public_mali_design_wo_e8aaea_trigger AFTER INSERT ON public."mali-design-works-contact_submissions" FOR EACH ROW EXECUTE FUNCTION dreamlit.dreamlit_e230ba6e_public_mali_design_wo_e8aaea();

CREATE TRIGGER dreamlit_eb940e0f_public_xtra_hand_solu_09234e_trigger AFTER INSERT ON public."xtra-hand-solutions-contact_submissions" FOR EACH ROW EXECUTE FUNCTION dreamlit.dreamlit_eb940e0f_public_xtra_hand_solu_09234e();


  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."audit_log_entries"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."flow_state"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."identities"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."instances"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."mfa_amr_claims"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."mfa_challenges"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."mfa_factors"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."oauth_clients"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."one_time_tokens"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."refresh_tokens"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."saml_providers"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."saml_relay_states"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."sessions"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."sso_domains"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."sso_providers"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "auth"."users"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "storage"."buckets"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "storage"."buckets_analytics"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "storage"."objects"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "storage"."s3_multipart_uploads"
  as permissive
  for select
  to dreamlit_app
using (true);



  create policy "dreamlit_dreamlit_app_select_policy"
  on "storage"."s3_multipart_uploads_parts"
  as permissive
  for select
  to dreamlit_app
using (true);




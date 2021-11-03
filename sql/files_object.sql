create table files_object
(
    id              int auto_increment,
    file_name       char(200)        null,
    extensions_name char(100)        null,
    oss_resource    char(250)        null,
    md5             text             null,
    signed          char(64)         null,
    pdb_name        char(250)        null,
    fos_name        text             null,
    create_at       timestamp        null,
    update_at       timestamp        null,
    owner           int              null,
    size            bigint default 0 not null,
    constraint files_object_id_uindex
        unique (id)
);

alter table files_object
    add primary key (id);


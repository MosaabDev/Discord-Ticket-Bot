const _0x386b=['log','1MoMNzi','19475KvfuUM','deleteReaction','updatePrefix','4255614hnUwAe','SELECT\x20*\x20FROM\x20ticketconfig\x20WHERE\x20guildid\x20=\x20?','importGuild','SELECT\x20*\x20FROM\x20sqlite_master\x20WHERE\x20type=\x27table\x27\x20AND\x20name=\x27ticket\x27;','run','synchronous\x20=\x201','prepare','UPDATE\x20ticketconfig\x20SET\x20ticketlog\x20=\x20?\x20WHERE\x20guildid\x20=\x20?','CREATE\x20UNIQUE\x20INDEX\x20idx_ticket_id\x20ON\x20ticket\x20(id);','getReaction','updateWhitelistedRoles','1346468rKhXWN','setTranscript','pragma','getTicketCount','getUserTicket','updateTicketLog','CREATE\x20TABLE\x20ticketreaction\x20(id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x20guildid\x20TEXT,\x20text\x20TEXT,\x20messageid\x20TEXT,\x20channelid\x20TEXT,\x20reaction\x20TEXT);','SELECT\x20*\x20from\x20ticket\x20WHERE\x20userid\x20=\x20?\x20AND\x20guildid\x20=\x20?\x20AND\x20status\x20=\x20\x27OPEN\x27','setReaction','newTicket','getIDTicket','Connected\x20to\x20database\x20successfully.','CREATE\x20UNIQUE\x20INDEX\x20idx_ticketreaction_id\x20ON\x20ticketreaction\x20(id);','29yEDngf','all','SELECT\x20*\x20from\x20ticket\x20WHERE\x20id\x20=\x20?\x20AND\x20guildid\x20=\x20?','6PgMCNU','137429XBmubJ','UPDATE\x20ticketconfig\x20SET\x20color\x20=\x20?\x20WHERE\x20guildid\x20=\x20?','UPDATE\x20ticketconfig\x20SET\x20maxtickets\x20=\x20?\x20WHERE\x20guildid\x20=\x20?','better-sqlite3','SELECT\x20*\x20FROM\x20ticketreaction\x20WHERE\x20guildid\x20=\x20?\x20AND\x20messageid\x20=\x20?\x20AND\x20channelid\x20=\x20?','SELECT\x20*\x20from\x20ticket\x20WHERE\x20channelid\x20=\x20?\x20AND\x20guildid\x20=\x20?\x20AND\x20status\x20=\x20\x27OPEN\x27','REPLACE\x20INTO\x20ticket\x20(id,\x20userid,\x20channelid,\x20guildid,\x20status,\x20transcript)\x20VALUES\x20(@id,\x20@userid,\x20@channelid,\x20@guildid,\x20@status,\x20@transcript);','4919iAhEaF','updateColor','1290120NPrNri','UPDATE\x20ticketconfig\x20SET\x20ticketcategory\x20=\x20?\x20WHERE\x20guildid\x20=\x20?','UPDATE\x20ticketconfig\x20SET\x20blacklistedroles\x20=\x20?\x20WHERE\x20guildid\x20=\x20?','getGuild','updateTicketCategory','36931dVfdau','updateMaxTickets','113qFRvDl','INSERT\x20INTO\x20ticketconfig\x20(guildid,\x20prefix,\x20color)\x20VALUES\x20(@guildid,\x20@prefix,\x20@color);','length','CREATE\x20TABLE\x20ticketconfig\x20(id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x20guildid\x20TEXT,\x20prefix\x20TEXT,\x20color\x20TEXT,\x20ticketcategory\x20TEXT\x20NULL,\x20ticketlog\x20TEXT\x20NULL,\x20maxtickets\x20TEXT\x20NULL,\x20whitelistedroles\x20TEXT\x20NULL,\x20blacklistedroles\x20TEXT\x20NULL);','./ticket-db.sqlite'];const _0x401f2c=_0x4da2;function _0x4da2(_0x595a80,_0x4d2c47){return _0x4da2=function(_0x386b91,_0x4da21e){_0x386b91=_0x386b91-0x1a4;let _0x3a6ee5=_0x386b[_0x386b91];return _0x3a6ee5;},_0x4da2(_0x595a80,_0x4d2c47);}(function(_0x1bef25,_0x1a32ea){const _0x5f1e47=_0x4da2;while(!![]){try{const _0x4a24e8=-parseInt(_0x5f1e47(0x1ad))+-parseInt(_0x5f1e47(0x1d5))+-parseInt(_0x5f1e47(0x1d3))*parseInt(_0x5f1e47(0x1a6))+parseInt(_0x5f1e47(0x1cb))*parseInt(_0x5f1e47(0x1cc))+-parseInt(_0x5f1e47(0x1ac))*parseInt(_0x5f1e47(0x1bb))+-parseInt(_0x5f1e47(0x1a4))*parseInt(_0x5f1e47(0x1c8))+parseInt(_0x5f1e47(0x1b0));if(_0x4a24e8===_0x1a32ea)break;else _0x1bef25['push'](_0x1bef25['shift']());}catch(_0x2cab22){_0x1bef25['push'](_0x1bef25['shift']());}}}(_0x386b,0xc2a5f),exports[_0x401f2c(0x1b4)]=async _0x45cbb9=>{const _0x33279a=_0x401f2c,_0x143a7a=require(_0x33279a(0x1cf)),_0x46cc14=new _0x143a7a(_0x33279a(0x1aa)),_0x5109f7=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1b3))['all'](),_0x305119=_0x46cc14['prepare']('SELECT\x20*\x20FROM\x20sqlite_master\x20WHERE\x20type=\x27table\x27\x20AND\x20name=\x27ticketconfig\x27;')[_0x33279a(0x1c9)](),_0x8206d4=_0x46cc14[_0x33279a(0x1b6)]('SELECT\x20*\x20FROM\x20sqlite_master\x20WHERE\x20type=\x27table\x27\x20AND\x20name=\x27ticketreaction\x27;')[_0x33279a(0x1c9)]();_0x5109f7[_0x33279a(0x1a8)]==0x0&&(_0x46cc14['prepare']('CREATE\x20TABLE\x20ticket\x20(id\x20INTEGER\x20PRIMARY\x20KEY\x20AUTOINCREMENT,\x20userid\x20TEXT,\x20guildid\x20TEXT,\x20channelid\x20TEXT,\x20status\x20TEXT,\x20transcript\x20TEXT\x20NULL);')[_0x33279a(0x1b4)](),_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1b8))['run'](),_0x46cc14[_0x33279a(0x1bd)](_0x33279a(0x1b5)),_0x46cc14['pragma']('journal_mode\x20=\x20wal')),_0x305119['length']==0x0&&(_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1a9))[_0x33279a(0x1b4)](),_0x46cc14[_0x33279a(0x1b6)]('CREATE\x20UNIQUE\x20INDEX\x20idx_ticketconfig_id\x20ON\x20ticketconfig\x20(id);')[_0x33279a(0x1b4)](),_0x46cc14[_0x33279a(0x1bd)](_0x33279a(0x1b5)),_0x46cc14[_0x33279a(0x1bd)]('journal_mode\x20=\x20wal')),_0x8206d4[_0x33279a(0x1a8)]==0x0&&(_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1c1))['run'](),_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1c7))[_0x33279a(0x1b4)](),_0x46cc14['pragma'](_0x33279a(0x1b5)),_0x46cc14['pragma']('journal_mode\x20=\x20wal')),console[_0x33279a(0x1ab)](_0x33279a(0x1c6)),_0x45cbb9[_0x33279a(0x1c4)]=_0x46cc14[_0x33279a(0x1b6)]('INSERT\x20INTO\x20ticket\x20(userid,\x20guildid,\x20channelid,\x20status)\x20VALUES\x20(@userid,\x20@guildid,\x20@channelid,\x20\x27OPEN\x27);'),_0x45cbb9[_0x33279a(0x1bc)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1d2)),_0x45cbb9['getTicket']=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1d1)),_0x45cbb9[_0x33279a(0x1c5)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1ca)),_0x45cbb9[_0x33279a(0x1bf)]=_0x46cc14['prepare'](_0x33279a(0x1c2)),_0x45cbb9[_0x33279a(0x1be)]=_0x46cc14['prepare']('SELECT\x20*\x20from\x20sqlite_sequence\x20WHERE\x20name\x20=\x20\x27ticket\x27'),_0x45cbb9[_0x33279a(0x1b2)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1a7)),_0x45cbb9[_0x33279a(0x1d8)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1b1)),_0x45cbb9[_0x33279a(0x1af)]=_0x46cc14[_0x33279a(0x1b6)]('UPDATE\x20ticketconfig\x20SET\x20prefix\x20=\x20?\x20WHERE\x20guildid\x20=\x20?'),_0x45cbb9[_0x33279a(0x1d4)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1cd)),_0x45cbb9[_0x33279a(0x1d9)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1d6)),_0x45cbb9[_0x33279a(0x1c0)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1b7)),_0x45cbb9[_0x33279a(0x1a5)]=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1ce)),_0x45cbb9[_0x33279a(0x1ba)]=_0x46cc14[_0x33279a(0x1b6)]('UPDATE\x20ticketconfig\x20SET\x20whitelistedroles\x20=\x20?\x20WHERE\x20guildid\x20=\x20?'),_0x45cbb9['updateBlacklistedRoles']=_0x46cc14[_0x33279a(0x1b6)](_0x33279a(0x1d7)),_0x45cbb9[_0x33279a(0x1b9)]=_0x46cc14['prepare'](_0x33279a(0x1d0)),_0x45cbb9[_0x33279a(0x1c3)]=_0x46cc14[_0x33279a(0x1b6)]('INSERT\x20INTO\x20ticketreaction\x20(guildid,\x20text,\x20messageid,\x20channelid,\x20reaction)\x20VALUES\x20(@guildid,\x20@text,\x20@messageid,\x20@channelid,\x20@reaction)'),_0x45cbb9[_0x33279a(0x1ae)]=_0x46cc14['prepare']('DELETE\x20FROM\x20ticketreaction\x20WHERE\x20guildid\x20=\x20?\x20AND\x20messageid\x20=\x20?\x20AND\x20channelid\x20=\x20?');});
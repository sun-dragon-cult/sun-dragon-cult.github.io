---
slug: rqid
title: RQG System ID (rqid)
tags: [rqg]
---

The RQG System manages content in different languages using the RQG System ID or "rqid". Currently
journals, actors & items have full support for rqid. The id's are stored as flags on documents under
the "rqg" scope as an object "documentRqidFlags" containing id, lang & priority properties.

When a macro, module, or internal RQG system code, needs a specific document, for example a
Broadsword or the journal entry describing dwarves, it can call
`await game.system.api.rqid.fromRqid("i.weapon.broadsword", "es")`, where the first parameter is the
invariant rqid, and the second parameter is the requested language code. If you do not include a
language code, it will return the English language version of the item, and if you request a
language other than english and the document is not found then a search for an English document is
done as a fallback.

First the system looks for documents the user has created or imported into the world that have
"rqid" and "lang" matching the provided parameters. If it finds any documents, it will return the
one with the highest priority. In this way the Game Master can import items and "override" the
system.

If the system does not find any matching documents in the world, it will look through all the
compendia for documents that have a matching "rqid" and "lang", and it will return the one with the
highest priority. This allows later RQG content packs to override older information. The GM can also
use this to create compendium packs with documents that override the ones provided by the system.

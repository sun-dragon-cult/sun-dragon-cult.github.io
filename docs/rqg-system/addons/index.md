---
sidebar_position: 10
slug: ./
title: 3rd party modules
tags: [module]
---

# RQG compatability with modules

RQG does not require any modules (except for the RQG wiki module), but it is a goal that it should
work with as many as possible. Here is a list of modules and their current state in regards to this
RQG system. A checked checkbox means that it should work in the latest released version of RQG.

## With integration

- [x] [Drag Ruler](https://foundryvtt.com/packages/drag-ruler) that has an integration to color code
      token movement limits.
- [x] [Times Up](https://foundryvtt.com/packages/times-up) that will auto expire token effects like
      protection spells after 10 combat rounds.

## Should have integration

- [ ] [Token Action HUD](https://foundryvtt.com/packages/token-action-hud-core) should be added as a
      separate integration module.
- [ ] [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar) waiting for
      update, supply two implementations in the mean time? Either modeling Glorantha seasons as
      simple calendar months (glorantha seasons will get the correct length, but week names do not
      work) or modeling Gloranthan weeks as simple calendar months with simple calendar seasons
      modeling glorantha seasons (week names work, but the month view only shows a week). Should be
      separate integration module. See module issues:
      [Named Weeks](https://github.com/vigoren/foundryvtt-simple-calendar/issues/161) &
      [Config of week names](https://github.com/vigoren/foundryvtt-simple-calendar/issues/561)
- [ ] [Item Piles](https://foundryvtt.com/packages/item-piles) This need a little more investigation
      to make it understand what items are unique. An incomplete setting can be found at
      [[Item-Pile-settings]]

## Should just work

- [x] [Dice So Nice](https://foundryvtt.com/packages/dice-so-nice)
- [x] [Carousel Combat Tracker](https://foundryvtt.com/packages/combat-tracker-dock)
- [x] [Dice Tray](https://foundryvtt.com/packages/dice-calculator)

## Does not work

- ???

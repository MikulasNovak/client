import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n

  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          buttons: {
            save: "Save",
            close: "Close",
            deleteList: "Delete List",
            addList: "Add list",
            archiveList: "Archive List",
            addMember: "Add member",
            delete: "Delete",
            addItem: "Add item",
            leaveList: "Leave",
          },
          filters: {
            all: "All",
            archived: "Archived",
            unarchived: "Unarchived",
            resolved: "Resolved",
            unresolved: "Unresolved",
          },
          containers: {
            itemList: "Items",
            memberList: "Members",
            chart: "Chart",
          },
          titles: {
            homepage: "Home",
            addItemModal: "Create item",
            addMemberModal: "Add member",
            deleteListModal: "Delete list",
            addListModal: "Create list",
            updateItemModal: "Update item",
            updateListModal: "Update list",
          },
          select: {
            selectUserDef: "Select a user",
          },
        },
      },
      cs: {
        translation: {
          buttons: {
            save: "Uložit",
            close: "Zavřít",
            deleteList: "Smazat List",
            addList: "Přidat list",
            archiveList: "Archivovat List",
            addMember: "Přidat člena",
            delete: "Smazat",
            addItem: "Přidat položku",
            leaveList: "Odejít",
          },
          filters: {
            all: "Vše",
            archived: "Archivované",
            unarchived: "Nearchivované",
            resolved: "Hotové",
            unresolved: "Nehotové",
          },
          containers: {
            itemList: "Položky",
            memberList: "Členové",
            chart: "Graf",
          },
          titles: {
            homepage: "Domov",
            addItemModal: "Vytvořit položku",
            addMemberModal: "Přidat člena",
            deleteListModal: "Smazat list",
            addListModal: "Vytvořit list",
            updateItemModal: "Upravit položku",
            updateListModal: "Upravit list",
          },
          select: {
            selectUserDef: "Vyberte uživatele",
          },
        },
      },
    },
  });

export default i18n;

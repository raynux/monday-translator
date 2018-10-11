export default [
  {
    key: 'inbox',
    selectors: [
      '#latest_news > div.inbox-title-wrapper > span',
      '#pulse_bar > div.nano-content > div > ul > li.notification_updates.my_news_bar.selected > a > span.pulse_list_title_text',
    ]
  },
  {
    key: 'myWeek',
    selectors: [
      '#pulse_bar > div.nano-content > div > div.personal-assistant-tab-component > a > span'
    ]
  },
  {
    key: 'boards',
    selectors: [
      '#pulse_bar > div.nano-content > div > div.top_lists_wrapper.boards-wrapper.open > div > div > h4 > span.pulse_list_title_text_wrapper > span > span.boards_title'
    ]
  },
  {
    key: 'shareableBoards',
    selectors: [
      '#pulse_bar > div.nano-content > div > div.share_boards_wrapper.actionbar_share_boards_wrapper.boards-wrapper.open > div > div > h4 > span.pulse_list_title_text_wrapper > span > span.boards_title'
    ]
  },
  {
    key: 'privateBoards',
    selectors: [
      '#pulse_bar > div.nano-content > div > div.private_boards_wrapper.boards-wrapper.open > div > div > h4 > span.pulse_list_title_text_wrapper > span > span.boards_title'
    ]
  },
  {
    key: 'allUpdates',
    selectors: [
      '#inbox-all-updates-link'
    ]
  },
  {
    key: 'new',
    selectors: [
      '#pulse_bar > div.nano-content > div > div.top_lists_wrapper.boards-wrapper.open > div > ul > li.add_new_board > div.add_new_board_btn',
      '#pulse_bar > div.nano-content > div > div.share_boards_wrapper.actionbar_share_boards_wrapper.boards-wrapper.open > div > ul > li > div.add_new_board_btn',
      '#pulse_bar > div.nano-content > div > div.private_boards_wrapper.boards-wrapper.open > div > ul > li > div.add_new_board_btn'
    ],
    nodeIndex: 2
  },
  {
    key: 'inviteTeamMembers',
    selectors: [
      '#invite_members_btn'
    ]
  },
  {
    key: 'upgrade',
    selectors: [
      '#header_top_nav_upgrade > button > span > span:nth-child(2)'
    ]
  },
  {
    key: 'past',
    selectors: [
      '#content > div > div.personal-assistant-content-view > div > div.deadlines-tasks-container > div:nth-child(1) > div > span.section-type-title'
    ]
  },
  {
    key: 'today',
    selectors: [
      '#content > div > div.personal-assistant-content-view > div > div.deadlines-tasks-container > div:nth-child(2) > div > span.section-type-title'
    ]
  },
  {
    key: 'upcoming',
    selectors: [
      '#content > div > div.personal-assistant-content-view > div > div.deadlines-tasks-container > div:nth-child(3) > div > span.section-type-title'
    ]
  },
  {
    key: 'done',
    selectors: [
      '#content > div > div.personal-assistant-content-view > div > div.deadlines-tasks-container > div:nth-child(4) > div > span.section-type-title'
    ]
  },
  {
    key: 'addView',
    selectors: [
      '#content > div > div > div.board-wrapper > div.board-header > div.board-header-content-wrapper > div.board-header-main > div.board-header-right > div > div.board-actions-section.board-views-list-wrapper > div > div > div > a > span'
    ]
  },
  {
    key: 'unsubscribe',
    selectors: [
      '#content > div > div > div.board-wrapper > div.board-header > div.board-header-content-wrapper > div.board-header-main > div.board-header-right > div > div.board-actions-section.subscribers-list-wrapper > div.subscribe-button > a'
    ]
  },
  {
    key: 'addGroupOfPulse',
    selectors: [
      '#content > div.dialog-node > div > div > div > div.ds-menu-inner > div:nth-child(1) > div:nth-child(1) > span'
    ]
  },

  // {
  //   key: '',
  //   selectors: [
  //     ''
  //   ]
  // },
]
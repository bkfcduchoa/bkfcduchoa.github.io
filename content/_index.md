---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: hero
    id: hero
    content:
      title: BKFC THPT Đức Hoà
      text: '-> *Những người bạn đồng hành cùng học sinh trường THPT Đức Hòa*'
      media:
        # Image from `assets/media/`
        src: logo.png
        alt: BKFC THPT Đức Hoà
      primary_action:
        text: Facebook
        url: https://www.facebook.com/bkfcduchoalongan/
        icon: brands/facebook
      secondary_action:
        text: Messenger
        url: https://www.messenger.com/t/bkfcduchoalongan/
        icon: brands/messenger
        style: outline
      trust:
        text: Online trong khoảng 6:00am đến 10:10pm
    design:
      layout: split-right
      background:
        gradient:
          start: '#032b91'
          end: '#1488db'
        text_color_light: true
  # The rest of the old hero text (a list and links), which the hero block cannot render as Markdown.
  - block: markdown
    id: hero-text
    content:
      title: ''
      text: |-
        Cập nhật những thông tin mới nhất về:

          - Kỳ thi THPT Quốc gia
          - Kỳ thi Đánh giá năng lực của ĐHQG Tp.HCM

          Cùng ôn lại, giải thêm những bài tập [_Toán_](/tag/toan/), [_Lý_](/tag/ly/), [_Hóa_](/tag/hoa/),...
    design:
      background:
        gradient:
          start: '#032b91'
          end: '#1488db'
        text_color_light: true
  - block: resume-biography-3
    id: about
    content:
      # Choose a user profile to display (a file name within `data/authors/`)
      username: admin
      headings:
        about: Giới thiệu
      # The profile text, shown in the About section as before
      text: |-
        BK FC - Tôi Yêu Bách Khoa là chương trình chính thức và duy nhất trực thuộc Văn phòng Tư vấn Tuyển sinh Trường Đại học Bách Khoa. 4 năm hoạt động là 4 năm BK FC không ngừng nổ lực và hoàn thiện.  
        “TÔI YÊU BÁCH KHOA” – RA ĐỜI VÌ HỌC SINH  
        Từ những năm trước, khi chúng ta còn là những cô cậu học sinh cấp 3, ngây thơ, trong sáng. Luôn mơ tưởng về giấc mơ “Đại Học”. Đọc báo, nghe đài, lướt web chỉ để tìm kiếm cho mình một đích đến trong tương lai. Mơ hồ, không rõ ràng, những thông tin về ngành nghề chỉ mang tính chất lý thuyết. Lúc ấy, học sinh cần một góc nhìn thực tế hơn, bao quát hơn. Và thế, Tôi yêu Bách Khoa được đặt những viên gạch đầu tiên.  
        Tiên khởi vào năm 2009, Chương trình về trường cũ với mục đích: Tổ chức tư vấn, hướng nghiệp, giúp đỡ, tổ chức sự kiện vui chơi,… gói gọn trong 1 ngày.
        Năm 2016, chương trình BK FC - Tôi yêu Bách Khoa được ra đời - là chương trình chính thức và duy nhất được thực hiện bởi Văn phòng Tư Vấn Tuyển Sinh trường Đại Học Bách Khoa - ĐHQG-HCM. Lúc này, mỗi trường đều có một Fanpage để tương tác, dễ dàng truyền thông, tiếp cận và giúp đỡ các bạn học sinh trong suốt cả năm học chứ không đơn thuần là một ngày về trường duy nhất.  
        Mỗi năm trải qua là mỗi năm “Tôi Yêu Bách Khoa” đồng hành cùng các em.  
        2017, 3000 TNV.  
        2018, 3500 TNV.  
        Và 2019 hơn 4000 TNV.  
        Ngày một lớn mạnh, ngày một đổi mới. Năm 2020, Tôi Yêu Bách Khoa sẽ trở lại với một diện mạo mới và thật khác biệt! Hãy cùng đồng hành cùng chúng tôi, nếu bạn là NGƯỜI-YÊU-BÁCH-KHOA.

        BKFC - THPT Đức Hòa là là nhóm thuộc chương trình BKFC - Tôi Yêu Bách Khoa nói trên. Nhóm tập hợp gần 30 bạn sinh viên Bách Khoa là cựu học sinh của trường THPT Đức Hòa, Long An. Rất mong được đồng hành cùng các bạn. Thân ái!
    design:
      avatar:
        size: medium
        shape: circle
  # The old slider (three text slides, no images) as three sections with the same colours and links.
  - block: markdown
    id: slide-1
    content:
      title: 👋 Xin chào!
      text: |-
        Rất vui vì bạn đã đến với site của chúng mình

        {{< button url="https://www.facebook.com/bkfcduchoalongan/" text="Liên hệ chúng mình tại đây nhé!" icon="brands/facebook" new_tab="true" />}}
    design:
      background:
        color: '#666'
        text_color_light: true
  - block: markdown
    id: slide-2
    content:
      title: Bạn là học sinh cấp 3?
      text: |-
        Xem hướng dẫn tại link sau nhé!

        {{< button url="/post/2020-05-30-huong-dan-hoc-sinh/" text="Hướng dẫn tại đây" icon="link" />}}
    design:
      background:
        color: '#555'
        text_color_light: true
  - block: markdown
    id: slide-3
    content:
      title: Bạn là thành viên nhóm?
      text: |-
        Xem hướng dẫn tại link sau nhé!

        {{< button url="/courses/huong-dan-thanh-vien" text="Hướng dẫn tại đây" icon="link" />}}
    design:
      background:
        color: '#333'
        text_color_light: true
  - block: collection
    id: posts
    content:
      title: Bài viết gần đây
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - blog
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Local view (layouts/_partials/views/compact.html), a port of the old "compact" view
      view: compact
  - block: collection
    id: events
    content:
      title: Sự kiện
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - events
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Local view (layouts/_partials/views/compact.html), a port of the old "compact" view
      view: compact
  - block: gallery
    id: gallery
    content:
      title: Thư viện ảnh
      subtitle: ''
      # All images in `assets/media/albums/gallery/`
      album: media/albums/gallery
    design:
      layout: grid
      columns: 2
      lightbox: true
  # Local block: layouts/_partials/hbx/blocks/tag-cloud/block.html
  - block: tag-cloud
    id: tags
    content:
      title: Từ khoá phổ biến
      text: "[_Xem tất cả từ khoá_](/tags)"
  - block: team-showcase
    id: people
    content:
      title: Các thành viên
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile (`data/authors/<slug>.yaml`) to add them to one or more of these groups.
      user_groups:
        - Members
      sort_by: name_family
      sort_ascending: true
    design:
      show_social: true
      show_interests: true
      show_role: true
      show_organizations: true
  - block: contact-info
    id: contact
    content:
      title: Liên hệ
      # The block shows `text` only when it has a single card, so the intro goes in `subtitle`.
      subtitle: 'Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua một trong những cách sau:'
      address:
        lines:
          - 268 Lý Thường Kiệt, Phường 14, Quận 10
          - Tp.Hồ Chí Minh 700000
          - Việt Nam
      office_hours:
        - '8:00 đến 18:00 các ngày trong tuần'
      social:
        - icon: brands/facebook
          name: Facebook
          url: 'https://www.facebook.com/bkfcduchoalongan/'
        - icon: brands/messenger
          name: Messenger
          url: 'https://www.messenger.com/t/bkfcduchoalongan/'
      map_url: 'https://www.openstreetmap.org/?mlat=10.77331&mlon=106.65938#map=15/10.77331/106.65938'
  - block: map
    id: map
    content:
      title: ''
      location:
        lat: 10.77331
        lng: 106.65938
        address: 268 Lý Thường Kiệt, Phường 14, Quận 10, Tp.Hồ Chí Minh 700000, Việt Nam
      zoom: 15
    design:
      # The address is already in the contact section above
      layout: map-only
---

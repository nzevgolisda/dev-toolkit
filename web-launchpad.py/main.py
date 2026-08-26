
import tkinter as tk
from tkinter import ttk
import socket
import webbrowser

def helloWorld():
    print('helloWorld')
def findIP():
    print(socket.gethostbyname(socket.gethostname()))
def getIp():
    print('##')
## Create Buttons
def createBtnQuit(name1):
    root = tk.Tk()
    root.geometry('500x700')
    btn = tk.Button(root, text = name1, bd = '5', command = root.destroy)
    btn.pack(side = 'top')
    root.mainloop()
def createBtnFunc(cancel, Func):
    root = tk.Tk()
    frame = tk.Frame(root)
    frame.pack()
    btn = tk.Button(frame, text=cancel, fg="red",command=root.quit)
    btn.pack(side=tk.LEFT)
    slogan = tk.Button(frame,text=Func,command=helloWorld)
    slogan.pack(side=tk.RIGHT)
    root.mainloop()
def createBtnIp(mine, other):
    root = tk.Tk()
    frame = tk.Frame(root)
    frame.pack()
    slogan = tk.Button(frame,text=mine,command=findIP)
    slogan.pack(side=tk.LEFT)
    btn = tk.Button(frame, text=other, fg="red",command=getIp)
    btn.pack(side=tk.RIGHT)
    root.mainloop()
#createBtnQuit('Cancel ##')
#createBtnFunc('Quit', 'helloWorld')
#createBtnIp('myIp', 'otherIp')

## Create Webpage opener
def openWebpage(src):
    return webbrowser.open_new_tab(src)


def openWebpages(*page_groups):
    for pages in page_groups:
        for src in pages:
            openWebpage(src)

intro = [
    'https://github.com/nzevgolisda?tab=repositories',
    'https://drive.google.com/drive/my-drive',
    'https://mail.uoc.gr/imp/dynamic.php?page=mailbox#mbox:SU5CT1g',
    'https://mail.google.com/mail/u/0/#inbox',
]

programming = [
    'https://stackoverflow.com/questions',
    'https://developer.mozilla.org/en-US/',
    'https://docs.python.org/3/',
    'https://roadmap.sh/',
    'https://www.w3schools.com/',
    'https://leetcode.com/problemset/',
    'https://exercism.org/tracks',
    'https://github.com/trending',
]

technology = [
    'https://news.ycombinator.com/',
    'https://www.theverge.com/tech',
    'https://arstechnica.com/',
    'https://techcrunch.com/',
    'https://www.wired.com/',
    'https://spectrum.ieee.org/',
]

science_and_news = [
    'https://www.reuters.com/',
    'https://apnews.com/',
    'https://www.bbc.com/news',
    'https://www.theguardian.com/international',
    'https://www.nature.com/',
    'https://www.sciencedaily.com/',
    'https://www.nasa.gov/',
]

other = [
    'https://www.google.com/',
    'https://www.youtube.com/',
    'https://www.facebook.com/',
]


site_groups = {
    'My tools': intro,
    'Programming': programming,
    'Technology': technology,
    'Science and news': science_and_news,
    'Other': other,
}


def site_name(url):
    return url.split('//', 1)[-1].split('/', 1)[0].removeprefix('www.')


def create_dashboard():
    root = tk.Tk()
    root.title('Web Launchpad')
    root.geometry('760x620')
    root.minsize(620, 480)

    selected = {group_name: tk.BooleanVar(value=True) for group_name in site_groups}
    status = tk.StringVar(value='Choose a site or open a selected category.')

    style = ttk.Style(root)
    style.configure('Title.TLabel', font=('Segoe UI', 18, 'bold'))
    style.configure('Section.TLabelframe', padding=8)

    header = ttk.Frame(root, padding=(18, 16, 18, 8))
    header.pack(fill='x')
    ttk.Label(header, text='Web Launchpad', style='Title.TLabel').pack(anchor='w')
    ttk.Label(header, text='Your programming, technology, science, and news shortcuts').pack(anchor='w')

    controls = ttk.Frame(root, padding=(18, 4, 18, 8))
    controls.pack(fill='x')

    def open_group(group_name):
        for url in site_groups[group_name]:
            openWebpage(url)
        status.set(f'Opened {len(site_groups[group_name])} {group_name.lower()} sites.')

    def open_selected():
        enabled_groups = [name for name, value in selected.items() if value.get()]
        for group_name in enabled_groups:
            open_group(group_name)
        if enabled_groups:
            status.set(f'Opened {len(enabled_groups)} selected categories.')
        else:
            status.set('Select at least one category first.')

    def set_all(value):
        for variable in selected.values():
            variable.set(value)
        status.set('All categories selected.' if value else 'All categories cleared.')

    ttk.Button(controls, text='Open selected', command=open_selected).pack(side='left')
    ttk.Button(controls, text='Select all', command=lambda: set_all(True)).pack(side='left', padx=(8, 0))
    ttk.Button(controls, text='Clear all', command=lambda: set_all(False)).pack(side='left', padx=(8, 0))
    ttk.Button(controls, text='Show my IP', command=lambda: status.set(f'Local IP: {socket.gethostbyname(socket.gethostname())}')).pack(side='right')

    content = ttk.Frame(root, padding=(18, 0, 18, 8))
    content.pack(fill='both', expand=True)
    canvas = tk.Canvas(content, highlightthickness=0)
    scrollbar = ttk.Scrollbar(content, orient='vertical', command=canvas.yview)
    scroll_frame = ttk.Frame(canvas)
    scroll_frame.bind('<Configure>', lambda event: canvas.configure(scrollregion=canvas.bbox('all')))
    canvas.create_window((0, 0), window=scroll_frame, anchor='nw')
    canvas.configure(yscrollcommand=scrollbar.set)
    canvas.pack(side='left', fill='both', expand=True)
    scrollbar.pack(side='right', fill='y')

    for group_name, urls in site_groups.items():
        section = ttk.LabelFrame(scroll_frame, text=group_name, style='Section.TLabelframe')
        section.pack(fill='x', pady=(0, 10))
        ttk.Checkbutton(section, text='Enable category', variable=selected[group_name]).grid(
            row=0, column=0, sticky='w', padx=4, pady=(0, 6)
        )
        for row, url in enumerate(urls, start=1):
            ttk.Button(
                section,
                text=f'Open {site_name(url)}',
                command=lambda url=url: openWebpage(url),
            ).grid(row=row, column=0, sticky='ew', padx=4, pady=2)
        section.columnconfigure(0, weight=1)

    footer = ttk.Frame(root, padding=(18, 4, 18, 14))
    footer.pack(fill='x')
    ttk.Label(footer, textvariable=status).pack(side='left')
    ttk.Button(footer, text='Quit', command=root.destroy).pack(side='right')
    root.mainloop()


if __name__ == '__main__':
    create_dashboard()


# 运维

## github

https://zhuanlan.zhihu.com/p/484734960


ssh 另外保存地址 \
ssh-keygen -t rsa -f D:/BaiduNetdiskDownload/project/ao -C "aocunxin@outlook.com"

每次推送时指定秘钥 \
ssh-agent bash 
ssh-add D:/BaiduNetdiskDownload/project/ao

git push

git remote set-url origin git@github.com:123Reyna/aoao_blog.git

推送远程也新建 \
git push --set-upstream origin pages

查看本地用户名 \
git config --local user.name


删除当前仓库 \
git push origin --delete pages

查看某次提交 \
git show <commit_id> --raw

展示 \
git status

该命令会列出Git仓库中的所有文件 \
git ls-files

该命令会显示当前分支最新提交的所有文件 \
git ls-tree -r HEAD

切换分支 \
git checkout branch

## idea工具快捷键
格式化快捷键 \
Ctrl+Alt+L


## mysql

[binlog日志恢复](https://blog.csdn.net/qifei_jia/article/details/126850753)
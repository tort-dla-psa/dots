#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias ll='ls -l --color=auto'
alias la='ls -a --color=auto'
alias sss='sudo systemctl'
PS1='[\u@\h \W]\$ '

source /usr/share/bash-completion/bash_completion
bind 'set show-all-if-ambiguous on'
bind 'TAB:menu-complete'


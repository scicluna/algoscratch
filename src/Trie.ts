//if not a priority queue, its a trie
//autocomplete board (O(1))

/*
trie - we have a root with no value in itself. but could have one of twenty-six (english language) letters as its children

"cat" -> blank -> C -> A -> T*
T contains some sort of "is word" flag
"cats" -> add S*
"cattle" -> branches off of cat 
if someone types c, will display a list of branching words from depthfirst search

//words can also have a score or frequency to prioritize the most relevant words
//insertion and deletion hard

insertion(str)
    curr = head
    for c in str
        if curr[c]
            curr=curr[c]
        else
            node = createNode()
            curr[c] = node
            curr = node
    curr.isWord = true

delete... post traversal
n is number of nodes -> probably constant time
its height, but height is bound by dictionary (longest word in dictionary)














*/
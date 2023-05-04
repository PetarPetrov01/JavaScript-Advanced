function solution(arg) {

    switch (arg) {
        case 'upvote':
            return this.upvotes++
        case 'downvote':
            return this.downvotes++
        case 'score':
            let upvotes = this.upvotes
            let downvotes = this.downvotes
            let totalVotes = upvotes + downvotes
            let balance = upvotes - downvotes

            function rating() {
                if (totalVotes < 10) {
                    return 'new'
                }
                if (upvotes > 0.66 * totalVotes) {
                    return 'hot'
                } else if (balance >= 0 && totalVotes > 100) {
                    return 'controversial'
                } else if (balance < 0) {
                    return 'unpopular'
                }
                return 'new'
            }


            if (totalVotes > 50) {
                let addNum = Math.ceil(0.25 * Math.max(upvotes, downvotes))
                return [upvotes + addNum, downvotes + addNum, balance, rating()]
            }

            return [upvotes, downvotes, balance, rating.call(this)]
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0
};
solution.call(post, 'upvote');
//solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');



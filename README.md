# TibeX demo store

Reference code for the [TibeX interactive demo](https://tibex.io/demo_test/#/kiko).

**Every vulnerability, customer, request and receipt in the demo is fictional.** This repository contains deliberately vulnerable teaching fixtures and in-memory stubs. It does not start a server and must not be deployed. It is not a customer incident or a report about another project.

## Walkthrough

1. Open the prepared repository in the demo.
2. Run the simulated code and application assessment.
3. Open TX-014: code, impact, sample request and independent observer receipt.
4. Compare the security-fixes pull request with these original files.
5. Apply the demo fix and run the retest. The demo stores progress in your browser and can be reset. No real scan, GitHub write, OAuth connection or payment is performed by the demo.

## Reference findings

| ID | Sample severity | Reference code |
| --- | --- | --- |
| TX-014 | Critical | [src/api/preview.ts](src/api/preview.ts) |
| TX-021 | Critical | [src/api/customer-export.ts](src/api/customer-export.ts) |
| TX-028 | High | [src/api/order-search.ts](src/api/order-search.ts) |
| TX-033 | High | [src/ui/comment.ts](src/ui/comment.ts) |
| TX-041 | Medium | [src/api/error-handler.ts](src/api/error-handler.ts) |
| TX-046 | Medium | [src/api/request-log.ts](src/api/request-log.ts) |
| TX-052 | Medium | [src/api/session.ts](src/api/session.ts) |

Severity and sample evidence describe the prepared scenario only. An HTTP success response is not used as proof of exploitability. The application process, two fictional companies and example.com identities are illustrative.
